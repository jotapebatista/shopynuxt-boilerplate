import { defineEventHandler, getRequestHeader } from 'h3'
import { verifyToken } from '~/server/utils/jwt'
import { prisma } from '~/server/utils/prisma'

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

    // Get wishlist item ID from params
    const id = event.context.params?.id
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Wishlist item ID is required'
      })
    }

    // Check if wishlist item exists and belongs to user
    const existingItem = await prisma.wishlistItem.findFirst({
      where: {
        id,
        userId: decoded.userId
      }
    })

    if (!existingItem) {
      throw createError({
        statusCode: 404,
        message: 'Wishlist item not found'
      })
    }

    // Delete wishlist item
    await prisma.wishlistItem.delete({
      where: { id }
    })

    return { message: 'Item removed from wishlist' }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 