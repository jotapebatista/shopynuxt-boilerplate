import { defineEventHandler, getRequestHeader, createError } from 'h3'
import { verifyToken } from '~/server/utils/jwt'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    // Get token from Authorization header
    const authHeader = getRequestHeader(event, 'Authorization')
    console.log('Auth header in /api/users/me:', authHeader)
    
    if (!authHeader) {
      console.log('No auth header found')
      throw createError({
        statusCode: 401,
        message: 'No authorization header'
      })
    }

    if (!authHeader.startsWith('Bearer ')) {
      console.log('Auth header does not start with Bearer:', authHeader)
      throw createError({
        statusCode: 401,
        message: 'Invalid authorization format'
      })
    }

    const token = authHeader.split(' ')[1]
    console.log('Token extracted in /api/users/me:', token)
    
    const decoded = verifyToken(token)
    console.log('Token decoded in /api/users/me:', decoded)

    if (!decoded) {
      console.log('Token verification failed')
      throw createError({
        statusCode: 401,
        message: 'Invalid token'
      })
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
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

    if (!user) {
      console.log('User not found in database:', decoded.id)
      throw createError({
        statusCode: 404,
        message: 'User not found'
      })
    }

    if (!user.isActive) {
      console.log('User account is inactive:', decoded.id)
      throw createError({
        statusCode: 401,
        message: 'User account is inactive'
      })
    }

    console.log('User found and active:', user)
    return user
  } catch (error: any) {
    console.error('Error in /api/users/me:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 