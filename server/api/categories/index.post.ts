import { defineEventHandler, createError, readBody } from '#imports'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, description } = body
    if (!name) {
      throw createError({
        statusCode: 400,
        message: 'Category name is required'
      })
    }

    // Generate slug from name
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    const category = await prisma.category.create({
      data: {
        name,
        slug,
        description
      }
    })
    return category
  } catch (error) {
    console.error('Error creating category:', error)
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : 'Error creating category'
    })
  }
}) 