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
    if (!decoded || decoded.role !== 'ADMIN') {
      throw createError({
        statusCode: 403,
        message: 'Forbidden'
      })
    }

    const body = await readBody(event)
    const settings = body as Record<string, string>

    // Update or create each setting
    await Promise.all(
      Object.entries(settings).map(async ([key, value]) => {
        await prisma.storeSettings.upsert({
          where: { key },
          update: { value },
          create: { key, value }
        })
      })
    )

    return { message: 'Settings updated successfully' }
  } catch (error: any) {
    console.error('Error updating store settings:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Failed to update store settings'
    })
  }
}) 