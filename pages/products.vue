<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Products</h1>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Sidebar -->
      <div class="w-full md:w-80 flex-shrink-0">
        <ProductFilters
          :categories="categories"
          :products="products"
          @update:filters="handleFiltersUpdate"
        />
      </div>

      <!-- Main Content -->
      <div class="flex-1">
        <div v-if="isLoading" class="flex justify-center items-center h-64">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>

        <div v-else-if="filteredProducts.length === 0" class="text-center py-12">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-white">No products found</h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>

        <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>

        <!-- Pagination -->
        <div v-if="pagination.totalPages > 1" class="mt-8 flex justify-center">
          <nav class="flex items-center gap-2">
            <button
              @click="changePage(pagination.page - 1)"
              :disabled="pagination.page === 1"
              class="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span class="text-sm text-gray-700 dark:text-gray-300">
              Page {{ pagination.page }} of {{ pagination.totalPages }}
            </span>
            <button
              @click="changePage(pagination.page + 1)"
              :disabled="pagination.page === pagination.totalPages"
              class="px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </nav>
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
}

interface Pagination {
  total: number
  page: number
  limit: number
  totalPages: number
}

const products = ref<Product[]>([])
const isLoading = ref(true)
const categories = ref<Category[]>([])
const pagination = ref<Pagination>({
  total: 0,
  page: 1,
  limit: 12,
  totalPages: 0
})

// Filter states
const searchQuery = ref('')
const selectedCategory = ref('')
const minPrice = ref<number | null>(null)
const maxPrice = ref<number | null>(null)
const priceRange = ref({ min: 0, max: 1000 })

const handleFiltersUpdate = (filters: {
  search: string
  category: string
  minPrice: number | null
  maxPrice: number | null
}) => {
  searchQuery.value = filters.search
  
  // Reset price range when category changes
  if (selectedCategory.value !== filters.category) {
    minPrice.value = null
    maxPrice.value = null
  }
  
  selectedCategory.value = filters.category
  minPrice.value = filters.minPrice
  maxPrice.value = filters.maxPrice
  // Reset to first page when filters change
  pagination.value.page = 1
}

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    // Search filter
    if (searchQuery.value && !product.name.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      return false
    }

    // Category filter
    if (selectedCategory.value && product.categoryId !== selectedCategory.value) {
      return false
    }

    // Price range filter
    if (minPrice.value && product.price < minPrice.value) {
      return false
    }
    if (maxPrice.value && product.price > maxPrice.value) {
      return false
    }

    return true
  })
})

const fetchProducts = async () => {
  isLoading.value = true
  try {
    const params: Record<string, any> = {
      page: pagination.value.page,
      limit: pagination.value.limit,
      search: searchQuery.value,
      category: selectedCategory.value,
    }
    if (minPrice.value !== null && minPrice.value !== priceRange.value.min) {
      params.minPrice = minPrice.value
    }
    if (maxPrice.value !== null && maxPrice.value !== priceRange.value.max) {
      params.maxPrice = maxPrice.value
    }
    const response = await $fetch('/api/products', { params })
    products.value = response.products
    pagination.value = response.pagination
  } catch (error) {
    console.error('Error fetching products:', error)
  } finally {
    isLoading.value = false
  }
}

const changePage = (newPage: number) => {
  if (newPage >= 1 && newPage <= pagination.value.totalPages) {
    pagination.value.page = newPage
  }
}

// Watch for filter changes
watch([searchQuery, selectedCategory, minPrice, maxPrice], () => {
  pagination.value.page = 1 // Reset to first page when filters change
  fetchProducts()
})

// Watch for page changes
watch(() => pagination.value.page, () => {
  fetchProducts()
})

onMounted(async () => {
  try {
    // Fetch products and categories in parallel
    const [categoriesResponse] = await Promise.all([
      fetch('/api/categories')
    ])
    
    const categoriesData = await categoriesResponse.json()
    categories.value = categoriesData
    
    // Initial products fetch
    await fetchProducts()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})

// Example clear filters function (call this from your ProductFilters component when clearing filters)
function clearAllFilters() {
  searchQuery.value = ''
  selectedCategory.value = ''
  minPrice.value = priceRange.value.min
  maxPrice.value = priceRange.value.max
  pagination.value.page = 1
  fetchProducts()
}
</script> 