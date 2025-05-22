import { defineEventHandler, createError } from '#imports'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params?.id
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Category ID is required'
      })
    }
    const category = await prisma.category.findUnique({
      where: { id }
    })
    if (!category) {
      throw createError({
        statusCode: 404,
        message: 'Category not found'
      })
    }
    return category
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error fetching category'
    })
  }
}) 