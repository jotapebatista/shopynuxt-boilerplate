import { defineEventHandler, getRequestHeader, readBody, createError } from 'h3'
import { verifyToken } from '~/server/utils/jwt'
import { prisma } from '~/server/utils/prisma'
import { z } from 'zod'

const updateProfileSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional()
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

    // Get current user data
    const currentUser = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { email: true }
    })

    if (!currentUser) {
      throw createError({
        statusCode: 404,
        message: 'User not found'
      })
    }

    // Validate request body
    const body = await readBody(event)
    const validatedData = updateProfileSchema.parse(body)

    // Only check email uniqueness if email is being changed
    if (validatedData.email !== currentUser.email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: validatedData.email,
          id: { not: decoded.id }
        }
      })

      if (existingUser) {
        throw createError({
          statusCode: 400,
          message: 'Email is already taken'
        })
      }
    }

    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: decoded.id },
      data: validatedData,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true
      }
    })

    return updatedUser
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