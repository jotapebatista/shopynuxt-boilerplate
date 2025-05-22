import { useCookie, useFetch } from '#imports'

export const useAuth = () => {
  const tokenCookie = useCookie('auth_token', { 
    maxAge: 60 * 60 * 24 * 7, // 7 days
    secure: true,
    sameSite: 'strict'
  })
  const userCookie = useCookie('auth_user', { 
    maxAge: 60 * 60 * 24 * 7,
    secure: true,
    sameSite: 'strict'
  })

  const setAuth = (token: string, user: any) => {
    tokenCookie.value = token
    userCookie.value = user
  }

  const clearAuth = () => {
    tokenCookie.value = null
    userCookie.value = null
  }

  const getAuth = () => {
    return {
      token: tokenCookie.value,
      user: userCookie.value ? (typeof userCookie.value === 'string' ? JSON.parse(userCookie.value) : userCookie.value) : null
    }
  }

  const validateToken = async (token: string) => {
    try {
      const { data: response } = await useFetch("/api/auth/validate", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      return response.value
    } catch (error) {
      return null
    }
  }

  const fetchUserProfile = async (token: string) => {
    try {
      const { data: user } = await useFetch("/api/users/me", {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      return user.value
    } catch (error) {
      return null
    }
  }

  const logout = async (token: string) => {
    try {
      await useFetch("/api/auth/logout", {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
    } finally {
      clearAuth()
    }
  }

  return {
    setAuth,
    clearAuth,
    getAuth,
    validateToken,
    fetchUserProfile,
    logout
  }
} 