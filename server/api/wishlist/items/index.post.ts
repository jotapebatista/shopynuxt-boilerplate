import { defineEventHandler, getRequestHeader, readBody, createError } from 'h3'
import { verifyToken } from '../../../utils/jwt'
import { prisma } from '../../../utils/prisma'
import { z } from 'zod'

const addToWishlistSchema = z.object({
  productId: z.string()
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
    const validatedData = addToWishlistSchema.parse(body)

    // Get or create wishlist
    let wishlist = await prisma.wishlist.findUnique({
      where: { userId: decoded.id }
    })

    if (!wishlist) {
      wishlist = await prisma.wishlist.create({
        data: { userId: decoded.id }
      })
    }

    // Check if product exists
    const product = await prisma.product.findUnique({
      where: { id: validatedData.productId }
    })

    if (!product) {
      throw createError({
        statusCode: 404,
        message: 'Product not found'
      })
    }

    // Check if item already exists in wishlist
    const existingItem = await prisma.wishlistItem.findFirst({
      where: {
        wishlistId: wishlist.id,
        productId: validatedData.productId
      }
    })

    if (existingItem) {
      throw createError({
        statusCode: 400,
        message: 'Product already in wishlist'
      })
    }

    // Add new item to wishlist
    const newItem = await prisma.wishlistItem.create({
      data: {
        wishlistId: wishlist.id,
        productId: validatedData.productId
      },
      include: {
        product: {
          select: {
            id: true,
            name: true,
            price: true,
            images: true,
            stock: true,
            slug: true
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