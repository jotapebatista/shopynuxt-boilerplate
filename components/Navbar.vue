<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    :class="{ 'shadow-lg': isScrolled }"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <Logo />

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-primary transition-colors"
            :class="{ 'text-primary': isActive(item.path) }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Right Side Actions -->
        <div class="flex items-center gap-4">
          <!-- Search -->
          <button
            @click="isSearchOpen = true"
            class="p-2 text-gray-600 hover:text-primary transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <!-- Cart -->
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/cart"
              class="text-gray-600 hover:text-primary transition-colors relative"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span
                v-if="cartItemCount > 0"
                class="absolute -top-4 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              >
                {{ cartItemCount }}
              </span>
            </NuxtLink>
          </div>

          <!-- User Menu -->
          <div class="relative" v-if="isAuthenticated">
            <button
              data-user-menu-button
              @click="isUserMenuOpen = !isUserMenuOpen"
              class="p-2 text-gray-600 hover:text-primary transition-colors"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            <!-- User Dropdown -->
            <div
              data-user-menu
              v-if="isUserMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 ring-1 ring-black ring-opacity-5"
            >
              <NuxtLink
                to="/account/profile"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </NuxtLink>
              <NuxtLink
                to="/account/orders"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Orders
              </NuxtLink>
              <NuxtLink
                to="/account/addresses"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Addresses
              </NuxtLink>
              <NuxtLink
                to="/account/wishlist"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Wishlist
              </NuxtLink>
              <div class="border-t border-gray-100 my-1"></div>
              <button
                @click="logout"
                class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          </div>

          <!-- Login/Register -->
          <div v-else class="hidden md:flex items-center gap-4">
            <NuxtLink
              to="/login"
              class="text-gray-600 hover:text-primary transition-colors"
            >
              Sign in
            </NuxtLink>
            <NuxtLink
              to="/register"
              class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Sign up
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-white border-b border-gray-200"
      >
        <div class="px-4 py-3 space-y-1">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="block py-2 text-gray-600 hover:text-primary transition-colors"
            :class="{ 'text-primary': isActive(item.path) }"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
        <div v-if="!isAuthenticated" class="px-4 py-3 border-t border-gray-200">
            <NuxtLink
            to="/login"
            class="block py-2 text-gray-600 hover:text-primary transition-colors"
            @click="isMobileMenuOpen = false"
            >
            Sign in
            </NuxtLink>
            <NuxtLink
            to="/register"
            class="block py-2 text-gray-600 hover:text-primary transition-colors"
            @click="isMobileMenuOpen = false"
            >
            Sign up
            </NuxtLink>
        </div>
      </div>
    </Transition>

    <!-- Search Modal -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isSearchOpen"
        class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center p-4"
        @click="isSearchOpen = false"
      >
        <div
          class="bg-white rounded-lg shadow-xl w-full max-w-2xl mt-20"
          @click.stop
        >
          <div class="p-4">
            <div class="relative">
              <input
                type="text"
                placeholder="Search products..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                v-model="searchQuery"
                @keyup.enter="handleSearch"
              />
              <button
                class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
                @click="isSearchOpen = false"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '~/stores/auth'
import { useCartStore } from '~/stores/cart'

const route = useRoute()
const authStore = useAuthStore()
const cartStore = useCartStore()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isUserMenuOpen = ref(false)
const isSearchOpen = ref(false)
const searchQuery = ref('')

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const isAuthenticated = computed(() => authStore.isAuthenticated)
const cartItemCount = computed(() => cartStore.totalItems)

const isActive = (path: string) => {
  return route.path === path
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    navigateTo(`/products?search=${encodeURIComponent(searchQuery.value.trim())}`)
    isSearchOpen.value = false
    searchQuery.value = ''
  }
}

const logout = async () => {
  await authStore.logout()
  isUserMenuOpen.value = false
  navigateTo('/login')
}

// Close dropdowns when clicking outside
const handleClickOutside = (event: MouseEvent) => {
  const userMenuButton = document.querySelector('[data-user-menu-button]')
  const userMenu = document.querySelector('[data-user-menu]')
  
  if (isUserMenuOpen.value && userMenuButton && userMenu) {
    const isClickInside = userMenuButton.contains(event.target as Node) || userMenu.contains(event.target as Node)
    if (!isClickInside) {
      isUserMenuOpen.value = false
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script> 