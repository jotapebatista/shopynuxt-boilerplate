import { defineEventHandler, createError } from '#imports'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const categories = await prisma.category.findMany()
    return categories
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error fetching categories'
    })
  }
}) 