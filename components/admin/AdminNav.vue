<template>
  <!-- Sidebar -->
  <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
    <div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
      <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div class="flex flex-shrink-0 items-center px-4">
          <span class="text-xl font-bold text-white">Admin</span>
        </div>
        <nav class="mt-5 flex-1 space-y-1 bg-white px-2">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors"
            :class="[
              isActive(item.path)
                ? 'bg-primary bg-opacity-10 text-white'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            ]"
          >
            <component :is="item.icon" class="mr-3 h-6 w-6 flex-shrink-0" />
            {{ item.name }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </div>

  <!-- Mobile header -->
  <div class="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow md:hidden">
    <div class="flex flex-1 justify-between px-4">
      <div class="flex flex-1">
        <span class="flex items-center text-xl font-bold text-white">Admin</span>
      </div>
      <div class="flex items-center gap-4">
        <button
          @click="theme.toggleDarkMode"
          class="p-2 rounded-md hover:bg-gray-100 transition-colors"
          :class="{ 'text-white': theme.isDarkMode }"
        >
          <component :is="theme.isDarkMode ? SunIcon : MoonIcon" class="h-6 w-6" />
        </button>
        <NuxtLink 
          to="/" 
          class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
        >
          View Website
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from '@/utils/theme'
import { useRoute } from 'vue-router'
import {
  HomeIcon,
  CubeIcon,
  TagIcon,
  ShoppingCartIcon,
  UsersIcon,
  PaintBrushIcon,
  CogIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()
const theme = useTheme()

const navigationItems = [
  {
    name: 'Dashboard',
    path: '/admin',
    icon: HomeIcon
  },
  {
    name: 'Products',
    path: '/admin/products',
    icon: CubeIcon
  },
  {
    name: 'Categories',
    path: '/admin/categories',
    icon: TagIcon
  },
  {
    name: 'Orders',
    path: '/admin/orders',
    icon: ShoppingCartIcon
  },
  {
    name: 'Users',
    path: '/admin/users',
    icon: UsersIcon
  },
  {
    name: 'Theme Settings',
    path: '/admin/theme',
    icon: PaintBrushIcon
  },
  {
    name: 'Settings',
    path: '/admin/settings',
    icon: CogIcon
  },
]

const isActive = (path: string) => {
  if (path === '/admin') {
    return route.path === path
  }
  return route.path.startsWith(path)
}
</script> 