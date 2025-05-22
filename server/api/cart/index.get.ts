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

    // Get cart for user with items and products
    const cart = await prisma.cart.findUnique({
      where: { userId: decoded.id },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                images: true,
                stock: true
              }
            }
          }
        }
      }
    })

    if (!cart) {
      // Create empty cart if it doesn't exist
      return await prisma.cart.create({
        data: {
          userId: decoded.id,
          items: {
            create: []
          }
        },
        include: {
          items: {
            include: {
              product: {
                select: {
                  id: true,
                  name: true,
                  price: true,
                  images: true,
                  stock: true
                }
              }
            }
          }
        }
      })
    }

    return cart
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 