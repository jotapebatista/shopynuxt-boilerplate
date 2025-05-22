<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-primary">Shopynuxt</NuxtLink>
        
        <div class="flex items-center space-x-4">
          <NuxtLink to="/products" class="text-gray-600 hover:text-primary">Products</NuxtLink>
          <NuxtLink to="/wishlist" class="text-gray-600 hover:text-primary flex items-center">
            <svg
              class="h-5 w-5 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Wishlist
            <span
              v-if="wishlistStore.totalItems > 0"
              class="ml-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {{ wishlistStore.totalItems }}
            </span>
          </NuxtLink>
          <button
            @click="cartStore.toggleCart"
            class="text-gray-600 hover:text-primary flex items-center"
          >
            <svg
              class="h-5 w-5 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart
            <span
              v-if="cartStore.totalItems > 0"
              class="ml-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {{ cartStore.totalItems }}
            </span>
          </button>
          <template v-if="authStore.isAuthenticated">
            <NuxtLink to="/account" class="text-gray-600 hover:text-primary">Account</NuxtLink>
            <button @click="authStore.logout" class="text-gray-600 hover:text-primary">Logout</button>
          </template>
          <template v-else>
            <NuxtLink to="/login" class="text-gray-600 hover:text-primary">Login</NuxtLink>
            <NuxtLink to="/register" class="text-gray-600 hover:text-primary">Register</NuxtLink>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
import { useAuthStore } from '~/stores/auth'
import { useWishlistStore } from '~/stores/wishlist'

const cartStore = useCartStore()
const authStore = useAuthStore()
const wishlistStore = useWishlistStore()

onMounted(async () => {
  if (authStore.isAuthenticated) {
    await wishlistStore.initialize()
  }
})
</script> 