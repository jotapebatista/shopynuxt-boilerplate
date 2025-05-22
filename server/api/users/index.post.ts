import { defineEventHandler, readBody } from '#imports'
import { prisma } from '~/server/utils/prisma'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, password, firstName, lastName, role } = body

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields'
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

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        role: role || 'USER'
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    })

    return user
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Error creating user'
    })
  }
}) 