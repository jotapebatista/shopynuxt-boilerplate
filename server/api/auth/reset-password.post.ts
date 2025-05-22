import { createError } from 'h3'
import { prisma } from '~/server/utils/prisma'
import { verifyToken } from '~/server/utils/jwt'
import { hash } from 'bcrypt'

export default defineEventHandler(async (event) => {
  try {
    const { token, password } = await readBody(event)

    // Verify token
    const decoded = verifyToken(token)
    if (!decoded) {
      throw createError({
        statusCode: 400,
        message: 'Invalid or expired reset token'
      })
    }

    // Find user and check if token is valid
    const user = await prisma.user.findFirst({
      where: {
        id: decoded.userId,
        resetToken: token,
        resetTokenExpires: {
          gt: new Date()
        }
      }
    })

    if (!user) {
      throw createError({
        statusCode: 400,
        message: 'Invalid or expired reset token'
      })
    }

    // Hash new password
    const hashedPassword = await hash(password, 10)

    // Update user password and clear reset token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpires: null
      }
    })

    return {
      message: 'Password has been reset successfully'
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to reset password'
    })
  }
}) 