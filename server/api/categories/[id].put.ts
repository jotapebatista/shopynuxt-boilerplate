import { defineEventHandler, createError, readBody } from '#imports'
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
    const body = await readBody(event)
    const { name, description } = body
    if (!name) {
      throw createError({
        statusCode: 400,
        message: 'Category name is required'
      })
    }
    const category = await prisma.category.update({
      where: { id },
      data: {
        name,
        description
      }
    })
    return category
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error updating category'
    })
  }
}) 