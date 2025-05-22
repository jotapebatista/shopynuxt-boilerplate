<template>
  <div class="min-h-screen bg-background">
    <div v-if="pending" class="container mx-auto py-12 text-center">
      <div class="animate-pulse flex flex-col items-center">
        <div class="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
        <div class="h-4 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>

    <div v-else-if="error" class="container mx-auto py-12 text-center">
      <div class="bg-red-50 text-red-500 p-4 rounded-lg inline-block">
        {{ error.message || 'Failed to load product' }}
      </div>
    </div>

    <div v-else-if="product" class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex mb-8 text-sm">
        <NuxtLink to="/" class="text-gray-500 hover:text-primary">Home</NuxtLink>
        <span class="mx-2 text-gray-400">/</span>
        <NuxtLink to="/products" class="text-gray-500 hover:text-primary">Products</NuxtLink>
        <span class="mx-2 text-gray-400">/</span>
        <span class="text-gray-900">{{ product.name }}</span>
      </nav>

      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Product Images -->
        <div class="lg:w-1/2">
          <div class="relative overflow-hidden rounded-xl bg-white shadow-lg">
            <div 
              class="w-full aspect-square transition-transform duration-300 origin-center"
              :class="{ 'scale-150': isZoomed }"
            >
              <img 
                :src="selectedImage" 
                :alt="product.name" 
                class="w-full h-full object-cover cursor-zoom-in"
                @click="isZoomed = !isZoomed"
              />
            </div>
            <div 
              v-if="!isZoomed"
              class="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm"
            >
              Click to zoom
            </div>
          </div>
          
          <!-- Thumbnail Gallery -->
          <div class="mt-4 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button 
              v-for="(img, i) in product.images" 
              :key="i" 
              @click="selectedImage = img"
              @mouseover="selectedImage = img"
              class="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200"
              :class="[
                selectedImage === img 
                  ? 'border-primary ring-2 ring-primary' 
                  : 'border-transparent hover:border-gray-300'
              ]"
            >
              <img 
                :src="img" 
                :alt="`${product.name} - Image ${i + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div class="lg:w-1/2">
          <div class="bg-white rounded-xl p-8 shadow-lg">
            <div class="mb-6">
              <h1 class="text-3xl font-bold text-gray-900 mb-2">{{ product.name }}</h1>
              <div class="flex items-center gap-2 text-gray-500 mb-4">
                <span class="px-3 py-1 bg-gray-100 rounded-full text-sm">
                  {{ product.category?.name }}
                </span>
                <span class="text-sm">•</span>
                <span class="text-sm">{{ product.stock }} in stock</span>
              </div>
              <div class="mt-4">
                <p class="text-3xl tracking-tight text-gray-900">
                  {{ priceFormatter.format(product.price) }}
                </p>
              </div>
            </div>

            <div class="prose prose-gray max-w-none mb-8">
              <p class="text-gray-600 leading-relaxed">{{ product.description }}</p>
            </div>

            <!-- Specifications -->
            <div v-if="product.specifications" class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Specifications</h3>
              <div class="grid grid-cols-2 gap-4">
                <div 
                  v-for="(value, key) in product.specifications" 
                  :key="key"
                  class="bg-gray-50 rounded-lg p-3"
                >
                  <div class="text-sm text-gray-500">{{ key }}</div>
                  <div class="font-medium">
                    <template v-if="Array.isArray(value)">
                      {{ value.join(', ') }}
                    </template>
                    <template v-else>
                      {{ value }}
                    </template>
                  </div>
                </div>
              </div>
            </div>

            <!-- Add to Cart -->
            <div class="space-y-4">
              <button 
                @click="addToCart" 
                class="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 font-medium"
                :disabled="isAddingToCart"
              >
                <svg v-if="isAddingToCart" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isAddingToCart ? 'Adding...' : 'Add to Cart' }}
              </button>
              
              <p v-if="addToCartError" class="text-red-500 text-sm text-center">
                {{ addToCartError }}
              </p>

              <!-- Additional Info -->
              <div class="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free Shipping</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '~/stores/cart'

const route = useRoute()
const isZoomed = ref(false)
const selectedImage = ref('')
const isAddingToCart = ref(false)
const addToCartError = ref<string | null>(null)
const cartStore = useCartStore()

const priceFormatter = {
  format(price: number) {
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

const { data: product, pending, error } = await useFetch(`/api/products/${route.params.slug}`, {
  key: `product-${route.params.slug}`,
  transform: (response) => {
    if (response?.images?.length > 0) {
      selectedImage.value = response.images[0]
    }
    return response
  }
})

const addToCart = async () => {
  if (!product.value) return
  
  try {
    isAddingToCart.value = true
    addToCartError.value = null
    
    await cartStore.addItem({
      productId: product.value.id,
      quantity: 1
    })
  } catch (error) {
    addToCartError.value = error instanceof Error ? error.message : 'Failed to add item to cart'
  } finally {
    isAddingToCart.value = false
  }
}
</script> 