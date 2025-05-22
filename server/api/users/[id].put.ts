import { defineEventHandler, readBody } from '#imports'
import { prisma } from '~/server/utils/prisma'
import bcrypt from 'bcryptjs'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id
    const body = await readBody(event)
    const { email, password, firstName, lastName, role } = body

    // Validate required fields
    if (!email || !firstName || !lastName) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields'
      })
    }

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

    // Check if email is already taken by another user
    const emailExists = await prisma.user.findFirst({
      where: {
        email,
        id: { not: id }
      }
    })

    if (emailExists) {
      throw createError({
        statusCode: 400,
        message: 'Email already taken'
      })
    }

    // Prepare update data
    const updateData: any = {
      email,
      firstName,
      lastName,
      role
    }

    // Only update password if provided
    if (password) {
      updateData.password = await bcrypt.hash(password, 10)
    }

    // Update user
    const user = await prisma.user.update({
      where: { id },
      data: updateData,
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
      message: error.message || 'Error updating user'
    })
  }
}) 