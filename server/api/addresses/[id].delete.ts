import { defineEventHandler, getRequestHeader, createError } from 'h3'
import { verifyToken } from '../../utils/jwt'
import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    // Get token from Authorization header
    const authHeader = getRequestHeader(event, 'Authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

    const token = authHeader.split(' ')[1]
    const decoded = await verifyToken(token)
    if (!decoded) {
      throw createError({
        statusCode: 401,
        message: 'Invalid token'
      })
    }

    // Get address ID from params
    const id = event.context.params?.id
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Address ID is required'
      })
    }

    // Check if address exists and belongs to user
    const address = await prisma.address.findFirst({
      where: {
        id,
        userId: decoded.id
      }
    })

    if (!address) {
      throw createError({
        statusCode: 404,
        message: 'Address not found'
      })
    }

    // Check if address is used in any active orders
    const ordersUsingAddress = await prisma.order.findMany({
      where: {
        shippingAddress: {
          id: id
        },
        status: {
          notIn: ['DELIVERED', 'CANCELLED']
        }
      }
    })

    if (ordersUsingAddress.length > 0) {
      throw createError({
        statusCode: 400,
        message: 'Cannot delete address because it is being used in active orders. You can delete this address once all orders are completed.'
      })
    }

    try {
      // Delete address
      await prisma.address.delete({
        where: { id }
      })

      // If deleted address was default, set another address as default
      if (address.isDefault) {
        const nextAddress = await prisma.address.findFirst({
          where: { userId: decoded.id }
        })

        if (nextAddress) {
          await prisma.address.update({
            where: { id: nextAddress.id },
            data: { isDefault: true }
          })
        }
      }

      return { message: 'Address deleted successfully' }
    } catch (error: any) {
      // Handle Prisma errors
      if (error.code === 'P2003') {
        throw createError({
          statusCode: 400,
          message: 'Cannot delete address because it is being used in existing orders. You can delete this address once all orders are completed.'
        })
      }
      throw error
    }
  } catch (error: any) {
    // Return user-friendly error messages
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'An unexpected error occurred. Please try again later.'
    })
  }
}) 