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

    // Get cart item ID from params
    const id = event.context.params?.id
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Cart item ID is required'
      })
    }

    // Get cart item and check ownership
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
        cart: {
          userId: decoded.id
        }
      }
    })

    if (!cartItem) {
      throw createError({
        statusCode: 404,
        message: 'Cart item not found'
      })
    }

    // Delete cart item
    await prisma.cartItem.delete({
      where: { id }
    })

    return { message: 'Cart item removed successfully' }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 