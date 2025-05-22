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

    // First check if the category exists
    const category = await prisma.category.findUnique({
      where: { id }
    })

    if (!category) {
      throw createError({
        statusCode: 404,
        message: 'Category not found'
      })
    }

    // Check if there are any products in this category
    const productsCount = await prisma.product.count({
      where: { categoryId: id }
    })

    if (productsCount > 0) {
      throw createError({
        statusCode: 400,
        message: 'Cannot delete category because it has associated products. Please remove or reassign the products first.'
      })
    }

    // Delete the category
    await prisma.category.delete({
      where: { id }
    })

    return { message: 'Category deleted successfully' }
  } catch (error) {
    console.error('Error deleting category:', error)
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : 'Error deleting category'
    })
  }
}) 