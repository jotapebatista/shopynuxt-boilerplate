import { defineEventHandler } from '#imports'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id }
    })

    if (!existingUser) {
      throw createError({
        statusCode: 404,
        message: 'User not found'
      })
    }

    // Delete user
    await prisma.user.delete({
      where: { id }
    })

    return { message: 'User deleted successfully' }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Error deleting user'
    })
  }
}) 