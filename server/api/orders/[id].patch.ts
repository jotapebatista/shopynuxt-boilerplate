import { defineEventHandler, getRequestHeader, createError, readBody } from 'h3'
import { verifyToken } from '~/server/utils/jwt'
import { prisma } from '~/server/utils/prisma'

const ORDER_STATUS_FLOW = {
  PENDING: ['PROCESSING', 'CANCELLED'],
  PROCESSING: ['SHIPPED', 'CANCELLED'],
  SHIPPED: ['DELIVERED', 'CANCELLED'],
  DELIVERED: [],
  CANCELLED: []
}

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

    // Only admins can update orders
    if (decoded.role !== 'ADMIN') {
      throw createError({
        statusCode: 403,
        message: 'Only admins can update orders'
      })
    }

    const orderId = event.context.params?.id
    const body = await readBody(event)

    // Validate status
    const validStatuses = ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED']
    if (!body.status || !validStatuses.includes(body.status)) {
      throw createError({
        statusCode: 400,
        message: 'Invalid status'
      })
    }

    // Get current order status
    const currentOrder = await prisma.order.findUnique({
      where: { id: orderId },
      select: { status: true }
    })

    if (!currentOrder) {
      throw createError({
        statusCode: 404,
        message: 'Order not found'
      })
    }

    // Check if status transition is valid
    const allowedTransitions = ORDER_STATUS_FLOW[currentOrder.status as keyof typeof ORDER_STATUS_FLOW]
    if (!allowedTransitions.includes(body.status)) {
      throw createError({
        statusCode: 400,
        message: `Cannot change status from ${currentOrder.status} to ${body.status}. Allowed transitions: ${allowedTransitions.join(', ')}`
      })
    }

    // Update order status
    const order = await prisma.order.update({
      where: { id: orderId },
      data: { status: body.status },
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

    return order
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 