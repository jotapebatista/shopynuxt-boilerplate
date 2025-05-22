<template>
  <div class="relative ml-3">
    <div>
      <button
        type="button"
        class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        @click="isOpen = !isOpen"
      >
        <span class="sr-only">Open user menu</span>
        <div
          class="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium"
        >
          {{ userInitial }}
        </div>
      </button>
    </div>

    <div
      v-if="isOpen"
      class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <NuxtLink
        to="/account/profile"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        tabindex="-1"
        @click="isOpen = false"
      >
        Your Profile
      </NuxtLink>
      <NuxtLink
        to="/account/orders"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        tabindex="-1"
        @click="isOpen = false"
      >
        Orders
      </NuxtLink>
      <NuxtLink
        to="/account/addresses"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        tabindex="-1"
        @click="isOpen = false"
      >
        Shipping Addresses
      </NuxtLink>
      <NuxtLink
        to="/account/wishlist"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        tabindex="-1"
        @click="isOpen = false"
      >
        Wishlist
      </NuxtLink>
      <button
        class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        role="menuitem"
        tabindex="-1"
        @click="handleLogout"
      >
        Sign out
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
const isOpen = ref(false)

const userInitial = computed(() => {
  return user.value?.firstName?.[0] || 'U'
})

const handleLogout = async () => {
  await authStore.logout()
  navigateTo('/auth/login')
}
</script> 