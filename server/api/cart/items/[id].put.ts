import { defineEventHandler, getRequestHeader, readBody, createError } from 'h3'
import { verifyToken } from '../../../utils/jwt'
import { prisma } from '../../../utils/prisma'
import { z } from 'zod'

const updateQuantitySchema = z.object({
  quantity: z.number().min(1)
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

    // Get cart item ID from params
    const id = event.context.params?.id
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Cart item ID is required'
      })
    }

    // Validate request body
    const body = await readBody(event)
    const validatedData = updateQuantitySchema.parse(body)

    // Get cart item and check ownership
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
        cart: {
          userId: decoded.id
        }
      },
      include: {
        product: true
      }
    })

    if (!cartItem) {
      throw createError({
        statusCode: 404,
        message: 'Cart item not found'
      })
    }

    // Check stock availability
    if (validatedData.quantity > cartItem.product.stock) {
      throw createError({
        statusCode: 400,
        message: 'Not enough stock available'
      })
    }

    // Update quantity
    const updatedItem = await prisma.cartItem.update({
      where: { id },
      data: { quantity: validatedData.quantity },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            images: true,
            stock: true
          }
        }
      }
    })

    return updatedItem
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