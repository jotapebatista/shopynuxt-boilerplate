<template>
  <div :class="{ 'dark': themeStore.isDarkMode }" class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Notification
      v-if="$notification.notification?.value"
      :show="!!$notification.notification?.value"
      :type="$notification.notification?.value?.type || 'info'"
      :title="$notification.notification?.value?.title || ''"
      :message="$notification.notification?.value?.message || ''"
      @close="$notification.hide()"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useThemeStore } from '@/stores/theme'
import { useAuthStore } from '~/stores/auth'
import { useWishlistStore } from '~/stores/wishlist'
import type { Ref } from 'vue'

// Initialize cart only
const cartStore = useCartStore()
const themeStore = useThemeStore()
const authStore = useAuthStore()
const wishlistStore = useWishlistStore()

// Add type declaration for the notification plugin
declare module '#app' {
  interface NuxtApp {
    $notification: {
      show: (notification: { type: 'error' | 'success' | 'info' | 'warning', title: string, message: string, timeout?: number }) => void
      hide: () => void
      notification: Ref<{ type: 'error' | 'success' | 'info' | 'warning', title: string, message: string } | null>
    }
  }
}

onMounted(async () => {
  await cartStore.initialize()
  themeStore.loadTheme()
  if (authStore.isAuthenticated) {
    await wishlistStore.initialize()
  }
})
</script>

<style>
:root {
  --color-primary: #3B82F6;
  --color-primary-dark: #2563EB;
  --color-secondary: #6B7280;
  --color-secondary-dark: #4B5563;
  --color-accent: #8B5CF6;
  --color-accent-dark: #7C3AED;
  --color-background: #FFFFFF;
  --color-surface: #FFFFFF;
  --color-border: #E5E7EB;
  --color-text: #1F2937;
  --font-family: 'Inter', sans-serif;
  --border-radius: 0.375rem;
  --spacing: 1rem;
}

.dark {
  --color-primary: #60A5FA;
  --color-primary-dark: #3B82F6;
  --color-secondary: #9CA3AF;
  --color-secondary-dark: #6B7280;
  --color-accent: #A78BFA;
  --color-accent-dark: #8B5CF6;
  --color-background: #111827;
  --color-surface: #1F2937;
  --color-border: #374151;
  --color-text: #F9FAFB;
}

.theme-transition {
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

body {
  font-family: var(--font-family);
  background-color: var(--color-background);
  color: var(--color-text);
}

.btn {
  @apply px-4 py-2 rounded transition-colors;
}

.btn-primary {
  @apply bg-primary text-white hover:bg-primary-dark;
}

.btn-secondary {
  @apply bg-secondary text-white hover:bg-secondary-dark;
}

.btn-accent {
  @apply bg-accent text-white hover:bg-accent-dark;
}

.bg-primary {
  background-color: var(--color-primary);
}

.bg-secondary {
  background-color: var(--color-secondary);
}

.bg-accent {
  background-color: var(--color-accent);
}

.bg-surface {
  background-color: var(--color-surface);
}

.text-primary {
  color: var(--color-primary);
}

.text-secondary {
  color: var(--color-secondary);
}

.text-accent {
  color: var(--color-accent);
}

.border-border {
  border-color: var(--color-border);
}

.hover\:bg-primary-dark:hover {
  filter: brightness(0.9);
}

.hover\:bg-secondary-dark:hover {
  filter: brightness(0.9);
}

.hover\:bg-accent-dark:hover {
  filter: brightness(0.9);
}

/* Dark mode specific styles */
.dark {
  .bg-white {
    @apply bg-gray-900;
  }

  .text-gray-500 {
    @apply text-gray-400;
  }

  .text-gray-700 {
    @apply text-gray-300;
  }

  .text-gray-900 {
    @apply text-gray-100;
  }

  .border-gray-200 {
    @apply border-gray-700;
  }

  .hover\:bg-gray-50:hover {
    @apply hover:bg-gray-800;
  }

  .hover\:text-gray-900:hover {
    @apply hover:text-gray-100;
  }

  .hover\:border-gray-300:hover {
    @apply hover:border-gray-600;
  }
}
</style> 