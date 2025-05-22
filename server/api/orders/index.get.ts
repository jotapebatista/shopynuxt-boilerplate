import { defineEventHandler, getRequestHeader, createError } from 'h3'
import { verifyToken } from '~/server/utils/jwt'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    // Get token from Authorization header
    const authHeader = getRequestHeader(event, 'Authorization')
    console.log('Auth header in /api/orders:', authHeader)
    
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
    console.log('Token extracted in /api/orders:', token)
    
    const decoded = verifyToken(token)
    console.log('Token decoded in /api/orders:', decoded)

    if (!decoded) {
      console.log('Token verification failed')
      throw createError({
        statusCode: 401,
        message: 'Invalid token'
      })
    }

    // Get orders based on user role
    const orders = await prisma.order.findMany({
      where: decoded.role === 'ADMIN' ? {} : { userId: decoded.id },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                images: true,
                slug: true
              }
            }
          }
        },
        shippingAddress: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    console.log('Orders found:', orders.length)
    return orders
  } catch (error: any) {
    console.error('Error in /api/orders:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 