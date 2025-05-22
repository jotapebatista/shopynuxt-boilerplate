import { defineEventHandler } from '#imports'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const users = await prisma.user.findMany({
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

    return users
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: 'Error fetching users'
    })
  }
}) 