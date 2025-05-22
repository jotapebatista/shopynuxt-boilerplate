import { defineEventHandler, createError, getQuery } from '#imports'
import { prisma } from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const page = Number(query.page) || 1
    const limit = Number(query.limit) || 12
    const skip = (page - 1) * limit
    const search = query.search as string
    const category = query.category as string
    const minPrice = query.minPrice ? Number(query.minPrice) : undefined
    const maxPrice = query.maxPrice ? Number(query.maxPrice) : undefined

    // Build where clause for filters
    const where = {
      AND: [
        search
          ? {
              OR: [
                { name: { contains: search, mode: 'insensitive' } },
                { description: { contains: search, mode: 'insensitive' } }
              ]
            }
          : {},
        category ? { categoryId: category } : {},
        {
          AND: [
            minPrice ? { price: { gte: minPrice } } : {},
            maxPrice ? { price: { lte: maxPrice } } : {}
          ]
        }
      ]
    }

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: { category: true },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.product.count({ where })
    ])

    return {
      products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: 'Error fetching products'
    })
  }
})