import { defineEventHandler, getRequestHeader, readBody, createError } from 'h3'
import { verifyToken } from '../../../utils/jwt'
import { prisma } from '../../../utils/prisma'
import { z } from 'zod'

const addToCartSchema = z.object({
  productId: z.string(),
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

    // Validate request body
    const body = await readBody(event)
    const validatedData = addToCartSchema.parse(body)

    // Get or create cart
    let cart = await prisma.cart.findUnique({
      where: { userId: decoded.id }
    })

    if (!cart) {
      cart = await prisma.cart.create({
        data: { userId: decoded.id }
      })
    }

    // Check if product exists and has enough stock
    const product = await prisma.product.findUnique({
      where: { id: validatedData.productId }
    })

    if (!product) {
      throw createError({
        statusCode: 404,
        message: 'Product not found'
      })
    }

    if (product.stock < validatedData.quantity) {
      throw createError({
        statusCode: 400,
        message: 'Not enough stock available'
      })
    }

    // Check if item already exists in cart
    const existingItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: validatedData.productId
      }
    })

    if (existingItem) {
      // Update quantity if item exists
      const newQuantity = existingItem.quantity + validatedData.quantity
      if (newQuantity > product.stock) {
        throw createError({
          statusCode: 400,
          message: 'Not enough stock available'
        })
      }

      const updatedItem = await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: newQuantity },
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
    }

    // Add new item to cart
    const newItem = await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: validatedData.productId,
        quantity: validatedData.quantity
      },
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

    return newItem
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