<template>
  <NuxtLink to="/" class="inline-flex items-center gap-2">
    <svg
      class="w-8 h-8"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        :class="[
          variant === 'light' ? 'fill-white' : 'fill-primary',
          'transition-colors duration-200'
        ]"
      />
      <path
        d="M2 17L12 22L22 17"
        :class="[
          variant === 'light' ? 'stroke-white' : 'stroke-primary',
          'transition-colors duration-200'
        ]"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2 12L12 17L22 12"
        :class="[
          variant === 'light' ? 'stroke-white' : 'stroke-primary',
          'transition-colors duration-200'
        ]"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    <span
      :class="[
        variant === 'light' ? 'text-white' : 'text-gray-900',
        'text-xl font-bold tracking-tight'
      ]"
    >
      Shopynuxt
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'light' | 'dark'
}>()
</script> 