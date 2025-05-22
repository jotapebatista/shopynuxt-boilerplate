import { PrismaClient } from '@prisma/client'
import { getCookie } from 'h3'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    // Check authentication
    const token = getCookie(event, 'auth_token')
    if (!token) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

    // Validate token and check admin role
    const response = await $fetch('/api/auth/validate', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response || response.role !== 'ADMIN') {
      throw createError({
        statusCode: 403,
        message: 'Unauthorized'
      })
    }

    // Get total orders
    const totalOrders = await prisma.order.count()

    // Get total users
    const totalUsers = await prisma.user.count({
      where: {
        role: 'USER'
      }
    })

    // Get total products
    const totalProducts = await prisma.product.count()

    // Get total revenue
    const orders = await prisma.order.findMany({
      where: {
        status: 'DELIVERED'
      },
      select: {
        total: true
      }
    })

    const totalRevenue = orders.reduce((sum, order) => sum + Number(order.total), 0)

    // Get recent orders
    const recentOrders = await prisma.order.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true
          }
        }
      }
    })

    // Get orders by status
    const ordersByStatus = await prisma.order.groupBy({
      by: ['status'],
      _count: true
    })

    // Get revenue by month (last 6 months)
    const sixMonthsAgo = new Date()
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)

    const revenueByMonth = await prisma.order.findMany({
      where: {
        status: 'DELIVERED',
        createdAt: {
          gte: sixMonthsAgo
        }
      },
      select: {
        total: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    })

    // Process revenue by month
    const monthlyRevenue = revenueByMonth.reduce((acc, order) => {
      const month = order.createdAt.toISOString().slice(0, 7) // YYYY-MM
      acc[month] = (acc[month] || 0) + Number(order.total)
      return acc
    }, {} as Record<string, number>)

    // Get top selling products
    const topProducts = await prisma.orderItem.groupBy({
      by: ['productId'],
      _sum: {
        quantity: true
      },
      orderBy: {
        _sum: {
          quantity: 'desc'
        }
      },
      take: 5
    })

    // Get product details for top products
    const topProductDetails = await Promise.all(
      topProducts.map(async (item) => {
        const product = await prisma.product.findUnique({
          where: { id: item.productId },
          select: { name: true }
        })
        return {
          name: product?.name || 'Unknown',
          quantity: item._sum.quantity || 0
        }
      })
    )

    return {
      stats: {
        totalOrders,
        totalUsers,
        totalProducts,
        totalRevenue: totalRevenue.toFixed(2)
      },
      recentOrders: recentOrders.map(order => ({
        id: order.id,
        customer: `${order.user.firstName} ${order.user.lastName}`,
        status: order.status,
        total: order.total,
        date: order.createdAt.toISOString().split('T')[0]
      })),
      ordersByStatus: ordersByStatus.map(item => ({
        status: item.status,
        count: item._count
      })),
      revenueByMonth: Object.entries(monthlyRevenue).map(([month, revenue]) => ({
        month,
        revenue: Number(revenue.toFixed(2))
      })),
      topProducts: topProductDetails
    }
  } catch (error) {
    console.error('Error fetching admin stats:', error)
    throw createError({
      statusCode: 500,
      message: 'Error fetching admin stats'
    })
  }
}) 