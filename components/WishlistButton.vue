<template>
  <button
    @click="toggleWishlist"
    class="p-2 rounded-full hover:bg-gray-100 transition-colors"
    :class="{ 'text-red-500': isInWishlist }"
    :disabled="isLoading"
  >
    <svg
      v-if="isLoading"
      class="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <svg
      v-else
      class="h-5 w-5"
      :class="{ 'fill-current': isInWishlist }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useWishlistStore } from '~/stores/wishlist'
import { useAuthStore } from '~/stores/auth'

const props = defineProps<{
  product: {
    id: string
    name: string
    price: number
    images: string[]
  }
}>()

const wishlistStore = useWishlistStore()
const authStore = useAuthStore()
const isLoading = ref(false)

const isInWishlist = computed(() => 
  wishlistStore.isInWishlist(props.product.id)
)

const toggleWishlist = async () => {
  if (!authStore.isAuthenticated) {
    // Redirect to login or show login modal
    navigateTo('/login')
    return
  }

  if (!wishlistStore.isInitialized) {
    await wishlistStore.initialize()
  }

  isLoading.value = true
  try {
    if (isInWishlist.value) {
      const item = wishlistStore.items.find(item => item.productId === props.product.id)
      if (item) {
        await wishlistStore.removeItem(item.id)
      }
    } else {
      await wishlistStore.addItem(props.product)
    }
  } catch (error) {
    console.error('Error toggling wishlist:', error)
  } finally {
    isLoading.value = false
  }
}
</script> 