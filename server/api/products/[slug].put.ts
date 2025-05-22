import { defineEventHandler, createError, readBody } from '#imports'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const slug = event.context.params?.id
    if (!slug) {
      throw createError({
        statusCode: 400,
        message: 'Product slug is required'
      })
    }

    const body = await readBody(event)
    const { name, description, price, stock, categoryId, images, specifications } = body

    if (!name || !description || !price || stock === undefined || !categoryId) {
      throw createError({
        statusCode: 400,
        message: 'Missing required fields'
      })
    }

    const product = await prisma.product.findUnique({
      where: { slug }
    })

    if (!product) {
      throw createError({
        statusCode: 404,
        message: 'Product not found'
      })
    }

    const updatedProduct = await prisma.product.update({
      where: { slug },
      data: {
        name,
        description,
        price,
        stock,
        categoryId,
        images,
        specifications
      },
      include: { category: true }
    })

    return updatedProduct
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error updating product'
    })
  }
}) 