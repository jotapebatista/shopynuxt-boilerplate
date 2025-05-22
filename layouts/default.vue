<template>
  <div class="min-h-screen bg-background flex flex-col">
    <Navbar />
    <div class="flex-grow py-10">
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useTheme } from '@/utils/theme'

const authStore = useAuthStore()
const theme = useTheme()
</script>

<style scoped>
.bg-background {
  background-color: var(--color-background);
}
</style> 