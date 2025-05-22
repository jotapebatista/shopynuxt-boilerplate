import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { useAuthStore } from '~/stores/auth'
import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized) => {
  const authStore = useAuthStore()

  // Check if the route is account-related
  if (to.path.startsWith('/account/')) {
    // If user is not authenticated, redirect to login
    if (!authStore.isAuthenticated) {
      return navigateTo({
        path: '/auth/login',
        query: { redirect: to.fullPath }
      })
    }

    // If user is authenticated but token is invalid, redirect to login
    const isValid = await authStore.validateToken()
    if (!isValid) {
      return navigateTo({
        path: '/auth/login',
        query: { redirect: to.fullPath }
      })
    }
  }
}) 