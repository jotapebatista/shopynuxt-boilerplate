import { defineEventHandler, getRequestHeader, readBody, createError } from 'h3'
import { verifyToken } from '../../utils/jwt'
import { prisma } from '../../utils/prisma'
import { z } from 'zod'

const addressSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(1),
  zipCode: z.string().min(1),
  country: z.string().min(1),
  isDefault: z.boolean().optional()
})

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

    // Validate request body
    const body = await readBody(event)
    const validatedData = addressSchema.parse(body)

    // If this is the first address or marked as default, update other addresses
    if (validatedData.isDefault) {
      await prisma.address.updateMany({
        where: { userId: decoded.id },
        data: { isDefault: false }
      })
    }

    // Create new address
    const address = await prisma.address.create({
      data: {
        ...validatedData,
        userId: decoded.id
      }
    })

    return address
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: error.errors[0].message
      })
    }

    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 