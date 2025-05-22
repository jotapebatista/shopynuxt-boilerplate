<template>
  <div class="min-h-screen bg-background flex flex-col">
    <Navbar />
    <div class="flex-grow">
      <slot />
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