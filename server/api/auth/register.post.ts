import { defineEventHandler, createError, readBody } from '#imports'
import { prisma } from '~/server/utils/prisma'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, password, firstName, lastName } = body

    if (!email || !password || !firstName || !lastName) {
      throw createError({
        statusCode: 400,
        message: 'All fields are required'
      })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      throw createError({
        statusCode: 400,
        message: 'User already exists'
      })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: 'ADMIN' // Set role as ADMIN for admin users
      }
    })

    return {
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
      message: error.message || 'Error during registration'
    })
  }
}) 