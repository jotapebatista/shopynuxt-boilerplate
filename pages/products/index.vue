<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumb -->
      <nav class="flex mb-8 text-sm">
        <NuxtLink to="/" class="text-gray-500 hover:text-primary">Home</NuxtLink>
        <span class="mx-2 text-gray-400">/</span>
        <span class="text-gray-900">Products</span>
      </nav>

      <!-- Products Grid -->
      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div v-for="i in 8" :key="i" class="animate-pulse">
          <div class="bg-gray-200 rounded-xl aspect-square mb-4"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>

      <div v-else-if="error" class="text-center py-12">
        <div class="bg-red-50 text-red-500 p-4 rounded-lg inline-block">
          {{ error.message || 'Failed to load products' }}
        </div>
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="group cursor-pointer"
          @click="navigateToProduct(product.slug)"
        >
          <div class="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
            <div class="relative aspect-square">
              <img 
                :src="product.images?.[0] || '/images/placeholder.png'" 
                :alt="product.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ product.name }}</h3>
              <p class="text-gray-500 text-sm mb-4 line-clamp-2">{{ product.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-xl font-bold text-gray-900">
                  {{ priceFormatter.format(product.price) }}
                </span>
                <span 
                  class="px-3 py-1 text-sm rounded-full"
                  :class="product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                >
                  {{ product.stock > 0 ? 'In Stock' : 'Out of Stock' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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

const { data: response, pending, error } = await useFetch('/api/products')
const products = computed(() => response.value?.products || [])

const navigateToProduct = (slug: string) => {
  router.push(`/products/${slug}`)
}
</script> 