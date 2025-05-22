<template>
  <div class="relative">
    <!-- Mobile Filter Button -->
    <button
      @click="isOpen = !isOpen"
      class="md:hidden w-full mb-4 flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
      Filters
      <span v-if="hasActiveFilters" class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary text-white">
        {{ activeFiltersCount }}
      </span>
    </button>

    <!-- Overlay for mobile -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      @click="isOpen = false"
    ></div>

    <!-- Sidebar -->
    <div
      :class="[
        'fixed md:static inset-y-0 left-0 transform md:transform-none transition-transform duration-200 ease-in-out z-50 w-80 bg-white dark:bg-gray-800 shadow-lg md:shadow-none',
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      ]"
    >
      <div class="h-full flex flex-col">
        <!-- Header -->
        <div class="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white">Filters</h2>
          <button
            @click="isOpen = false"
            class="md:hidden text-gray-400 hover:text-gray-500"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Filter Content -->
        <div class="flex-1 overflow-y-auto p-4 space-y-6">
          <!-- Search -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search products..."
                class="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                @input="updateFilters"
              />
            </div>
          </div>

          <!-- Categories -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Categories
            </label>
            <select
              v-model="selectedCategory"
              class="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
              @change="updateFilters"
            >
              <option value="">All Categories</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>

          </div>

          <!-- Price Range -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price Range
            </label>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <input
                  v-model="minPrice"
                  type="number"
                  placeholder="Min"
                  class="block w-full pl-3 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                  @input="updateFilters"
                />
              </div>
              <div>
                <input
                  v-model="maxPrice"
                  type="number"
                  placeholder="Max"
                  class="block w-full pl-3 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                  @input="updateFilters"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            v-if="hasActiveFilters"
            @click="clearAllFilters"
            class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Clear all filters
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

interface Category {
  id: string
  name: string
  slug: string
  description: string
  createdAt: string
  updatedAt: string
}

const props = defineProps<{
  categories: Category[]
  products: any[]
}>()

const emit = defineEmits<{
  (e: 'update:filters', filters: {
    search: string
    category: string
    minPrice: number
    maxPrice: number
  }): void
}>()

const isOpen = ref(false)
const searchQuery = ref('')
const selectedCategory = ref('')
const minPrice = ref(0)
const maxPrice = ref(1000)

// Price range configuration
const priceRange = ref({
  min: 0,
  max: 1000
})

// Update price range based on products
watch(() => props.products, (newProducts) => {
  if (newProducts.length > 0) {
    const prices = newProducts.map(p => p.price)
    priceRange.value = {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices))
    }
    minPrice.value = priceRange.value.min
    maxPrice.value = priceRange.value.max
  }
}, { immediate: true })

const hasActiveFilters = computed(() => {
  return searchQuery.value || selectedCategory.value || minPrice.value !== priceRange.value.min || maxPrice.value !== priceRange.value.max
})

const activeFiltersCount = computed(() => {
  let count = 0
  if (searchQuery.value) count++
  if (selectedCategory.value) count++
  if (minPrice.value !== priceRange.value.min || maxPrice.value !== priceRange.value.max) count++
  return count
})

const updateFilters = () => {
  emit('update:filters', {
    search: searchQuery.value,
    category: selectedCategory.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value
  })
}

const clearAllFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = ''
  minPrice.value = priceRange.value.min
  maxPrice.value = priceRange.value.max
  updateFilters()
}
</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 100%;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  pointer-events: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 2px solid #3b82f6;
  cursor: pointer;
  margin-top: -9px;
}

input[type="range"]::-moz-range-thumb {
  pointer-events: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 2px solid #3b82f6;
  cursor: pointer;
}

.dark input[type="range"]::-webkit-slider-thumb {
  background: #1f2937;
  border-color: #3b82f6;
}

.dark input[type="range"]::-moz-range-thumb {
  background: #1f2937;
  border-color: #3b82f6;
}
</style> 