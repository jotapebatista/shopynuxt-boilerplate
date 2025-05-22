import { createError } from 'h3'
import { prisma } from '~/server/utils/prisma'
import { generateToken } from '~/server/utils/jwt'
import { sendPasswordResetEmail } from '~/server/utils/email'

export default defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event)

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      throw createError({
        statusCode: 404,
        message: 'User not found'
      })
    }

    // Generate reset token
    const resetToken = generateToken({ userId: user.id }, '1h')

    // Store reset token in database
    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken,
        resetTokenExpires: new Date(Date.now() + 3600000) // 1 hour from now
      }
    })

    // Send reset email
    await sendPasswordResetEmail(email, resetToken)

    return {
      message: 'Password reset instructions have been sent to your email'
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to process password reset request'
    })
  }
}) 