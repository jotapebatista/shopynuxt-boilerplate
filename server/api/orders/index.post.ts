import { defineEventHandler, getRequestHeader, readBody, createError } from 'h3'
import { verifyToken } from '../../utils/jwt'
import { prisma } from '../../utils/prisma'
import { z } from 'zod'
import { OrderStatus } from '@prisma/client'

const createOrderSchema = z.object({
  shippingAddressId: z.string(),
  paymentMethod: z.enum(['credit_card', 'paypal', 'bank_transfer'])
})

export default defineEventHandler(async (event) => {
  try {
    // Get token from Authorization header
    const authHeader = getRequestHeader(event, 'Authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

    const token = authHeader.split(' ')[1]
    const decoded = await verifyToken(token)
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: 'Invalid token'
      })
    }

    // Validate request body
    const body = await readBody(event)
    const validatedData = createOrderSchema.parse(body)

    // Get user's cart
    const cart = await prisma.cart.findUnique({
      where: { userId: decoded.id },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    })

    if (!cart || cart.items.length === 0) {
      throw createError({
        statusCode: 400,
        message: 'Cart is empty'
      })
    }

    // Check if shipping address exists and belongs to user
    const shippingAddress = await prisma.address.findFirst({
      where: {
        id: validatedData.shippingAddressId,
        userId: decoded.id
      }
    })

    if (!shippingAddress) {
      throw createError({
        statusCode: 404,
        message: 'Shipping address not found'
      })
    }

    // Check stock availability and calculate total
    let total = 0
    for (const item of cart.items) {
      if (item.quantity > item.product.stock) {
        throw createError({
          statusCode: 400,
          message: `Not enough stock for ${item.product.name}`
        })
      }
      total += item.product.price * item.quantity
    }

    // Create order in a transaction
    const order = await prisma.$transaction(async (tx) => {
      // Create order
      const order = await tx.order.create({
        data: {
          userId: decoded.id,
          total,
          status: OrderStatus.PENDING,
          paymentMethod: validatedData.paymentMethod,
          shippingAddressId: validatedData.shippingAddressId,
          items: {
            create: cart.items.map(item => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.product.price
            }))
          }
        }
      })

      // Update product stock
      for (const item of cart.items) {
        await tx.product.update({
          where: { id: item.productId },
          data: {
            stock: {
              decrement: item.quantity
            }
          }
        })
      }

      // Clear cart
      await tx.cartItem.deleteMany({
        where: { cartId: cart.id }
      })

      return order
    })

    return order
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      })
    }

    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 