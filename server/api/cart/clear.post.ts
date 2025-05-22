import { verifyAuth } from '~/server/utils/auth'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    // Verify authentication
    const user = await verifyAuth(event)
    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

    // Delete all cart items for the user
    await prisma.cartItem.deleteMany({
      where: {
        cart: {
          userId: user.id
        }
      }
    })

    return { success: true }
  } catch (error: any) {
    console.error('Error clearing cart:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 