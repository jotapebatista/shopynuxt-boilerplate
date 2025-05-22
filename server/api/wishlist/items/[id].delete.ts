import { defineEventHandler, getRequestHeader, createError } from 'h3'
import { verifyToken } from '../../../utils/jwt'
import { prisma } from '../../../utils/prisma'

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

    // Get wishlist item ID from params
    const id = event.context.params?.id
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Wishlist item ID is required'
      })
    }

    // Get wishlist item and check ownership
    const wishlistItem = await prisma.wishlistItem.findFirst({
      where: {
        id,
        wishlist: {
          userId: decoded.id
        }
      }
    })

    if (!wishlistItem) {
      throw createError({
        statusCode: 404,
        message: 'Wishlist item not found'
      })
    }

    // Delete wishlist item
    await prisma.wishlistItem.delete({
      where: { id }
    })

    return { message: 'Wishlist item removed successfully' }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 