import { defineEventHandler, createError } from '#imports'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const slug = event.context.params?.slug
    if (!slug) {
      throw createError({
        statusCode: 400,
        message: 'Product slug is required'
      })
    }
    const product = await prisma.product.findUnique({
      where: { slug },
      include: { category: true }
    })
    if (!product) {
      throw createError({
        statusCode: 404,
        message: 'Product not found'
      })
    }
    return product
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error fetching product'
    })
  }
}) 