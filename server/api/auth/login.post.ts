import { defineEventHandler, createError, readBody } from '#imports'
import { prisma } from '../../utils/prisma'

import { generateToken } from '../../utils/jwt'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, password } = body

    if (!email || !password) {
      throw createError({
        statusCode: 400,
        message: 'Email and password are required'
      })
    }

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'Invalid credentials'
      })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      throw createError({
        statusCode: 401,
        message: 'Invalid credentials'
      })
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    })

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      }
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Error during login'
    })
  }
}) 