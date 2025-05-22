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

    // Toggle isActive status
    const user = await prisma.user.update({
      where: { id },
      data: {
        isActive: !existingUser.isActive
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return user
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Error toggling user status'
    })
  }
}) 