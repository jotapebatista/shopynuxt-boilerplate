<template>
  <div class="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <!-- Product Image Container -->
    <div class="relative aspect-square w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
      <img
        :src="product.images[0]"
        :alt="product.name"
        class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <!-- Wishlist Button -->
      <div class="absolute top-2 right-2">
        <button
          @click="toggleWishlist"
          class="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors"
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
      </div>
      <!-- Quick Add to Cart Button -->
      <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          @click="addToCart"
          class="w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>

    <!-- Product Info -->
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
        {{ product.name }}
      </h3>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">
        {{ product.description }}
      </p>
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-primary">{{ priceFormatter.formatPrice(product.price) }}</span>
        <NuxtLink
          :to="`/products/${product.slug}`"
          class="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
        >
          View Details
          <svg
            class="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useWishlistStore } from '~/stores/wishlist'
import { useAuthStore } from '~/stores/auth'
import { useCartStore } from '~/stores/cart'

interface Product {
  id: string
  name: string
  description: string
  price: number
  categoryId: string
  category?: {
    id: string
    name: string
  }
  images: string[]
  slug: string
}

const props = defineProps<{
  product: Product
}>()

const wishlistStore = useWishlistStore()
const authStore = useAuthStore()
const cartStore = useCartStore()
const isLoading = ref(false)

const isInWishlist = computed(() => 
  wishlistStore.isInWishlist(props.product.id)
)

const toggleWishlist = async () => {
  if (!authStore.isAuthenticated) {
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

const addToCart = async () => {
  try {
    await cartStore.addItem({
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
      images: props.product.images
    })
  } catch (error) {
    console.error('Error adding to cart:', error)
  }
}

const viewDetails = () => {
  navigateTo(`/products/${props.product.slug}`)
}

const priceFormatter = {
  formatPrice(price: number) {
    const currency = 'EUR'
    const symbol = '€'
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price) + (currency === 'EUR' ? '' : ` ${symbol}`)
  }
}
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 