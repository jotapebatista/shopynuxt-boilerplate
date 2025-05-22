<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-md mx-auto text-center">
      <div class="mb-8">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
        <p class="text-gray-600">Thank you for your purchase. Your order has been received.</p>
      </div>

      <div class="space-y-4">
        <NuxtLink
          to="/account/orders"
          class="block w-full bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
        >
          View Order
        </NuxtLink>
        <NuxtLink
          to="/"
          class="block w-full bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
        >
          Continue Shopping
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script> 