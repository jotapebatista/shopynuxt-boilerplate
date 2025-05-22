import { defineEventHandler, createError, readBody } from '#imports'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, description, price, stock, categoryId, images, specifications } = body
    if (!name || !description || !price || !stock || !categoryId) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields'
      })
    }

    // Generate slug from name
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    const product = await prisma.product.create({
      data: {
        name,
        slug,
        description,
        price,
        stock,
        categoryId,
        images,
        specifications
      },
      include: { category: true }
    })
    return product
  } catch (error) {
    console.error('Error creating product:', error)
    throw createError({
      statusCode: 500,
      message: 'Error creating product'
    })
  }
}) 