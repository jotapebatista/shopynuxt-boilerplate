import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const verifyAuth = async (event: any) => {
  try {
    const authHeader = getHeader(event, 'authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return null
    }

    const token = authHeader.split(' ')[1]
    const config = useRuntimeConfig()
    const decoded = jwt.verify(token, config.jwtSecret) as any

    if (!decoded?.id) {
      return null
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    })

    if (!user || !user.isActive) {
      return null
    }

    return user
  } catch (error) {
    console.error('Auth verification error:', error)
    return null
  }
} 