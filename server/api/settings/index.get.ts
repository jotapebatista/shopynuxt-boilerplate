import { defineEventHandler, createError } from 'h3'
import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const settings = await prisma.storeSettings.findMany()
    
    // If no settings exist, create default settings
    if (settings.length === 0) {
      await prisma.storeSettings.create({
        data: {
          key: 'defaultCurrency',
          value: 'EUR'
        }
      })
      return { defaultCurrency: 'EUR' }
    }

    return settings.reduce((acc: Record<string, string>, setting) => {
      acc[setting.key] = setting.value
      return acc
    }, {})
  } catch (error) {
    console.error('Error fetching store settings:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch store settings'
    })
  }
}) 