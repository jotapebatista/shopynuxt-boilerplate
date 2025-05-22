<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-primary">Orders</h1>
      <div class="flex gap-4">
        <select 
          v-model="statusFilter" 
          class="border border-border rounded-lg px-3 py-2 bg-background text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">All Statuses</option>
          <option value="PENDING">Pending</option>
          <option value="PROCESSING">Processing</option>
          <option value="SHIPPED">Shipped</option>
          <option value="DELIVERED">Delivered</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
        <div class="relative">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search orders..." 
            class="border border-border rounded-lg pl-10 pr-3 py-2 bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>

    <div v-else-if="error" class="text-center text-red-500 dark:text-red-400 py-8">
      {{ error }}
    </div>

    <div v-else-if="!filteredOrders.length" class="text-center py-8">
      <p class="text-gray-500 dark:text-gray-400">No orders found</p>
    </div>

    <div v-else class="bg-surface rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-border">
        <thead class="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Order ID
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Customer
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Date
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Total
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Status
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-surface divide-y divide-border">
          <tr v-for="order in filteredOrders" :key="order.id" class="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
              #{{ order.id.slice(-6) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
              {{ order.user.firstName }} {{ order.user.lastName }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
              {{ new Date(order.createdAt).toLocaleDateString() }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
              ${{ order.total.toFixed(2) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span 
                class="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                :class="{
                  'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200': order.status === 'PENDING',
                  'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200': order.status === 'PROCESSING',
                  'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200': order.status === 'SHIPPED',
                  'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200': order.status === 'DELIVERED',
                  'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200': order.status === 'CANCELLED'
                }"
              >
                {{ order.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
              <div class="flex items-center gap-2">
                <button 
                  @click="viewOrder(order.id)"
                  class="text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useNuxtApp } from '#app'

interface Order {
  id: string
  user: {
    firstName: string
    lastName: string
  }
  createdAt: string
  total: number
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED'
}

const router = useRouter()
const orders = ref<Order[]>([])
const isLoading = ref(true)
const error = ref<string | null>(null)
const statusFilter = ref('')
const searchQuery = ref('')
const authStore = useAuthStore()

// Fetch orders
const fetchOrders = async () => {
  try {
    isLoading.value = true
    error.value = null
    const { $notification } = useNuxtApp()
    const response = await $fetch<Order[]>('/api/orders', {
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      }
    })
    orders.value = response
    if (response.length === 0) {
      $notification.show({
        type: 'info',
        title: 'Info',
        message: 'No orders found',
        timeout: 5000
      })
    }
  } catch (e: any) {
    const { $notification } = useNuxtApp()
    error.value = e.message || 'An error occurred while fetching orders'
    orders.value = []
    $notification.show({
      type: 'error',
      title: 'Error',
      message: e.data?.message || e.message || 'Failed to fetch orders',
      timeout: 5000
    })
  } finally {
    isLoading.value = false
  }
}

// Filter orders based on status and search query
const filteredOrders = computed(() => {
  let filtered = orders.value || []

  if (statusFilter.value) {
    filtered = filtered.filter(order => order.status === statusFilter.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(order => 
      order.id.toLowerCase().includes(query) ||
      order.user.firstName.toLowerCase().includes(query) ||
      order.user.lastName.toLowerCase().includes(query)
    )
  }

  return filtered
})

// View order details
const viewOrder = (orderId: string) => {
  router.push(`/admin/orders/${orderId}`)
}

// Initialize
onMounted(() => {
  fetchOrders()
})
</script>

<style scoped>
.bg-background {
  background-color: var(--color-background);
}

.bg-surface {
  background-color: var(--color-surface);
}

.text-primary {
  color: var(--color-primary);
}

.border-border {
  border-color: var(--color-border);
}

.hover\:text-primary-dark:hover {
  filter: brightness(0.9);
}
</style> 
