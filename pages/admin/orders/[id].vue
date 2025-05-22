<template>
  <div class="container mx-auto py-8">
    <div class="mb-6">
      <button 
        @click="router.back()"
        class="text-blue-600 hover:text-blue-900 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Back to Orders
      </button>
    </div>

    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>

    <div v-else-if="error" class="text-center text-red-500 py-8">
      {{ error }}
    </div>

    <div v-else-if="!order" class="text-center py-8">
      <p class="text-gray-500">Order not found</p>
    </div>

    <div v-else class="space-y-6">
      <!-- Order Header -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Order #{{ order.id }}</h1>
            <p class="text-gray-600 dark:text-gray-400">Placed on {{ new Date(order.createdAt).toLocaleDateString() }}</p>
          </div>
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span 
              class="px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap"
              :class="{
                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200': order.status === 'PENDING',
                'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200': order.status === 'PROCESSING',
                'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200': order.status === 'SHIPPED',
                'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': order.status === 'DELIVERED',
                'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': order.status === 'CANCELLED'
              }"
            >
              {{ order.status }}
            </span>
            <select 
              v-model="newStatus" 
              class="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              @change="updateOrderStatus"
            >
              <option :value="order.status" disabled>{{ order.status }}</option>
              <option 
                v-for="status in allowedStatuses" 
                :key="status" 
                :value="status"
              >
                {{ status }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Order Status Timeline -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-6 text-gray-900 dark:text-white">Order Progress</h2>
        <div class="relative">
          <div class="absolute top-4 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          <div class="relative flex justify-between">
            <div 
              v-for="(status, index) in ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED']" 
              :key="status"
              class="flex flex-col items-center"
            >
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center z-10 border-2"
                :class="{
                  'bg-primary text-white border-primary': isStatusActive(status),
                  'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-600': !isStatusActive(status)
                }"
              >
                <svg v-if="isStatusActive(status)" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span v-else>{{ index + 1 }}</span>
              </div>
              <span 
                class="mt-2 text-sm font-medium"
                :class="{
                  'text-primary': isStatusActive(status),
                  'text-gray-500 dark:text-gray-400': !isStatusActive(status)
                }"
              >
                {{ status }}
              </span>
              <span 
                v-if="order.status === status"
                class="text-xs text-gray-500 dark:text-gray-400 mt-1"
              >
                {{ new Date(order.updatedAt).toLocaleDateString() }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Customer Information -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Customer Information</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Name</p>
            <p class="font-medium text-gray-900 dark:text-white">{{ order.user.firstName }} {{ order.user.lastName }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Email</p>
            <p class="font-medium text-gray-900 dark:text-white">{{ order.user.email }}</p>
          </div>
        </div>
      </div>

      <!-- Shipping Address -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Shipping Address</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Address</p>
            <p class="font-medium text-gray-900 dark:text-white">{{ order.shippingAddress.street }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">City</p>
            <p class="font-medium text-gray-900 dark:text-white">{{ order.shippingAddress.city }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">State</p>
            <p class="font-medium text-gray-900 dark:text-white">{{ order.shippingAddress.state }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Postal Code</p>
            <p class="font-medium text-gray-900 dark:text-white">{{ order.shippingAddress.zipCode }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600 dark:text-gray-400">Country</p>
            <p class="font-medium text-gray-900 dark:text-white">{{ order.shippingAddress.country }}</p>
          </div>
        </div>
      </div>

      <!-- Order Items -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Order Items</h2>
        <div class="space-y-4">
          <div v-for="item in order.items" :key="item.id" class="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <img 
              :src="item.product.images[0]" 
              :alt="item.product.name"
              class="w-20 h-20 object-cover rounded-lg"
            />
            <div class="flex-1">
              <h3 class="font-medium text-gray-900 dark:text-white">{{ item.product.name }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Quantity: {{ item.quantity }}</p>
            </div>
            <div class="text-right">
              <p class="font-medium text-gray-900 dark:text-white">${{ (item.product.price * item.quantity).toFixed(2) }}</p>
              <p class="text-sm text-gray-600 dark:text-gray-400">${{ item.product.price.toFixed(2) }} each</p>
            </div>
          </div>
        </div>
        <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
            <span class="text-2xl font-bold text-gray-900 dark:text-white">${{ order.total.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useNuxtApp } from '#app'

interface OrderItem {
  id: string
  quantity: number
  product: {
    id: string
    name: string
    price: number
    images: string[]
  }
}

interface ShippingAddress {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

interface Order {
  id: string
  user: {
    firstName: string
    lastName: string
    email: string
  }
  items: OrderItem[]
  shippingAddress: ShippingAddress
  total: number
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED'
  createdAt: string
  updatedAt: string
}

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const { $notification } = useNuxtApp()

const order = ref<Order | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)
const newStatus = ref('')

const ORDER_STATUS_FLOW = {
  PENDING: ['PROCESSING', 'CANCELLED'],
  PROCESSING: ['SHIPPED', 'CANCELLED'],
  SHIPPED: ['DELIVERED', 'CANCELLED'],
  DELIVERED: [],
  CANCELLED: []
}

const allowedStatuses = computed(() => {
  if (!order.value) return []
  return ORDER_STATUS_FLOW[order.value.status as keyof typeof ORDER_STATUS_FLOW]
})

// Fetch order details
const fetchOrder = async () => {
  try {
    isLoading.value = true
    error.value = null
    const response = await $fetch<Order>(`/api/orders/${route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      }
    })
    order.value = response
    newStatus.value = response.status
  } catch (e: any) {
    error.value = e.message || 'An error occurred while fetching order details'
  } finally {
    isLoading.value = false
  }
}

// Update order status
const updateOrderStatus = async () => {
  if (!order.value || newStatus.value === order.value.status) return

  try {
    const response = await $fetch<Order>(`/api/orders/${order.value.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      },
      body: {
        status: newStatus.value
      }
    })
    order.value = response
    $notification.show({
      type: 'success',
      title: 'Success',
      message: `Order status updated to ${newStatus.value}`,
      timeout: 5000
    })
  } catch (e: any) {
    error.value = e.message || 'Failed to update order status'
    newStatus.value = order.value.status // Revert on error
    $notification.show({
      type: 'error',
      title: 'Error',
      message: e.data?.message || e.message || 'Failed to update order status',
      timeout: 5000
    })
  }
}

const isStatusActive = (status: string) => {
  if (!order.value) return false
  
  const statusOrder = ['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED']
  const currentIndex = statusOrder.indexOf(order.value.status)
  const statusIndex = statusOrder.indexOf(status)
  
  return statusIndex <= currentIndex
}

onMounted(() => {
  fetchOrder()
})
</script>

<style scoped>
.bg-primary {
  background-color: var(--color-primary);
}

.text-primary {
  color: var(--color-primary);
}
</style> 