<!-- components/BaseNavLink.vue -->
<template>
  <NuxtLink
    :to="to"
    class="group flex items-center px-3 py-2 text-sm font-medium rounded-md"
    :class="[
      isActive ? activeClass : inactiveClass
    ]"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string,
  activeClass: string,
  inactiveClass: string
}>()

const route = useRoute()
const isActive = computed(() => route.path === props.to || route.path.startsWith(props.to))
</script>
