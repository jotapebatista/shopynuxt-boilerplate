import { defineEventHandler, getRequestHeader, createError } from 'h3'
import { verifyToken } from '~/server/utils/jwt'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    // Get token from Authorization header
    const authHeader = getRequestHeader(event, 'Authorization')
    
    if (!authHeader) {
      throw createError({
        statusCode: 401,
        message: 'No authorization header'
      })
    }

    if (!authHeader.startsWith('Bearer ')) {
      throw createError({
        statusCode: 401,
        message: 'Invalid authorization format'
      })
    }

    const token = authHeader.split(' ')[1]
    const decoded = verifyToken(token)

    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: 'Invalid token'
      })
    }

    const orderId = event.context.params?.id

    // Get order with items and shipping address
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                images: true
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
      }
    })

    if (!order) {
      throw createError({
        statusCode: 404,
        message: 'Order not found'
      })
    }

    // Check if user has permission to view this order
    if (decoded.role !== 'ADMIN' && order.userId !== decoded.id) {
      throw createError({
        statusCode: 403,
        message: 'Not authorized to view this order'
      })
    }

    return order
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 