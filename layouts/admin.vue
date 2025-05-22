<template>
  <div class="min-h-screen bg-gray-100">
    <AdminNav />
    <div class="md:pl-64">
      <div class="py-10">
        <header>
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              <slot name="header" />
            </h1>
          </div>
        </header>
        <main>
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="px-4 py-8 sm:px-0">
              <slot />
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AdminNav from '~/components/admin/AdminNav.vue'
</script>

<style scoped>
.bg-background {
  background-color: var(--color-background);
}

.bg-surface {
  background-color: var(--color-surface);
}

.bg-primary {
  background-color: var(--color-primary);
}

.text-primary {
  color: var(--color-primary);
}

.text-primary-dark {
  color: var(--color-primary);
  filter: brightness(0.8);
}

.border-border {
  border-color: var(--color-border);
}

.hover\:bg-primary-dark:hover {
  filter: brightness(0.9);
}
</style> 