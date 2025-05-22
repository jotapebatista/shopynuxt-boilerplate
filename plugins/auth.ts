import { useAuthStore } from '~/stores/auth'

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export default defineNuxtPlugin(async (nuxtApp) => {
  const authStore = useAuthStore()
  const tokenCookie = useCookie('auth_token', {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  })
  const userCookie = useCookie('auth_user', {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  })

  // Initialize auth store from cookies
  if (tokenCookie.value && userCookie.value) {
    try {
      const user = typeof userCookie.value === 'string' 
        ? JSON.parse(userCookie.value) as User
        : userCookie.value as User

      // Set the auth state without triggering cookie updates
      authStore.$patch({
        token: tokenCookie.value,
        user: user,
        isAuthenticated: true
      })

      // Validate token in background
      if (process.client) {
        const isValid = await authStore.validateToken()
        if (!isValid) {
          authStore.clearAuth()
          tokenCookie.value = null
          userCookie.value = null
        }
      }
    } catch (error) {
      console.error('Error initializing auth:', error)
      authStore.clearAuth()
      tokenCookie.value = null
      userCookie.value = null
    }
  }

  // Watch for auth state changes to update cookies
  watch(() => authStore.token, (newToken) => {
    tokenCookie.value = newToken
  }, { immediate: true })

  watch(() => authStore.user, (newUser) => {
    userCookie.value = newUser ? JSON.stringify(newUser) : null
  }, { immediate: true })

  // Add middleware to handle auth state
  nuxtApp.hook('app:created', () => {
    const router = useRouter()
    
    router.beforeEach(async (to, from, next) => {
      // Skip auth check for public routes
      if (to.path.startsWith('/auth/') || to.path === '/') {
        return next()
      }

      // If we have a token but no user, try to fetch the user
      if (authStore.token && !authStore.user) {
        try {
          await authStore.fetchUserProfile()
        } catch (error) {
          console.error('Error fetching user profile:', error)
          authStore.clearAuth()
          return next('/auth/login?redirect=' + encodeURIComponent(to.fullPath))
        }
      }

      // If not authenticated and trying to access protected route, redirect to login
      if (!authStore.isAuthenticated && !to.path.startsWith('/auth/')) {
        return next('/auth/login?redirect=' + encodeURIComponent(to.fullPath))
      }

      next()
    })
  })
}) 