import { defineEventHandler, getRequestHeader, readBody } from 'h3'
import { verifyToken } from '~/server/utils/jwt'
import { prisma } from '~/server/utils/prisma'
import { z } from 'zod'
import bcrypt from 'bcryptjs'

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters long')
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
    const validatedData = changePasswordSchema.parse(body)

    // Get user with password
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        password: true
      }
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        message: 'User not found'
      })
    }

    // Verify current password
    const isValidPassword = await bcrypt.compare(validatedData.currentPassword, user.password)
    if (!isValidPassword) {
      throw createError({
        statusCode: 400,
        message: 'Current password is incorrect'
      })
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(validatedData.newPassword, 10)

    // Update password
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword }
    })

    return { message: 'Password updated successfully' }
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