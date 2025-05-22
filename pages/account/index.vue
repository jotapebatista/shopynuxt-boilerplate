<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Account Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Profile Card -->
      <NuxtLink to="/account/profile" class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
        <div class="flex items-center">
          <div class="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl">
            {{ userInitials }}
          </div>
          <div class="ml-4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Profile</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">Manage your personal information</p>
          </div>
        </div>
      </NuxtLink>

      <!-- Orders Card -->
      <NuxtLink to="/account/orders" class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
        <div class="flex items-center">
          <div class="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <div class="ml-4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Orders</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">View your order history</p>
          </div>
        </div>
      </NuxtLink>

      <!-- Addresses Card -->
      <NuxtLink to="/account/addresses" class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
        <div class="flex items-center">
          <div class="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 flex items-center justify-center">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div class="ml-4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Addresses</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">Manage your shipping addresses</p>
          </div>
        </div>
      </NuxtLink>

      <!-- Wishlist Card -->
      <NuxtLink to="/account/wishlist" class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
        <div class="flex items-center">
          <div class="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 flex items-center justify-center">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div class="ml-4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">Wishlist</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">View your saved items</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const userInitials = computed(() => {
  if (!authStore.user) return ''
  return `${authStore.user.firstName[0]}${authStore.user.lastName[0]}`
})
</script> 