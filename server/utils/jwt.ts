import jwt from 'jsonwebtoken'
import { config } from '~/server/config'

interface TokenPayload {
  id: string
  email: string
  role: string
  iat?: number
  exp?: number
}

const getJwtSecret = () => {
  const secret = process.env.JWT_SECRET || config.jwtSecret
  if (!secret) {
    throw new Error('JWT_SECRET is not configured')
  }
  return secret
}

export const generateToken = (payload: TokenPayload, expiresIn: string = '7d'): string => {
  const secret = getJwtSecret()
  return jwt.sign(payload, secret, { expiresIn })
}

export const verifyToken = (token: string): TokenPayload | null => {
  const secret = getJwtSecret()
  
  try {
    const decoded = jwt.verify(token, secret) as TokenPayload
    return decoded
  } catch (error) {
    return null
  }
} 