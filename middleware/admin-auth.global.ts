import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { useAuthStore } from '~/stores/auth'
import type { RouteLocationNormalized } from 'vue-router'

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized) => {
  const authStore = useAuthStore()

  // Check if the route is an admin route
  if (to.path.startsWith('/admin')) {
    // If not authenticated, redirect to login
    if (!authStore.isAuthenticated) {
      return navigateTo('/auth/login?admin=1')
    }

    // Validate token
    const isValid = await authStore.validateToken()
    if (!isValid) {
      return navigateTo('/auth/login?admin=1')
    }

    // If authenticated but not admin, redirect to home
    if (!authStore.isAdmin) {
      return navigateTo('/')
    }
  }
}) 