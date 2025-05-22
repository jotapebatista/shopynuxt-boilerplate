<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Checkout</h1>

    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>

    <div v-else-if="error" class="text-center text-red-500 py-8">
      {{ error }}
    </div>

    <div v-else-if="!cartStore.items.length" class="text-center py-8">
      <p class="text-gray-500 dark:text-gray-400 mb-4">Your cart is empty</p>
      <NuxtLink to="/products" class="text-primary hover:text-primary-dark transition-colors">
        Continue Shopping
      </NuxtLink>
    </div>

    <div v-else class="flex flex-col lg:flex-row gap-8">
      <!-- Checkout Steps -->
      <div class="lg:w-2/3">
        <!-- Progress Bar -->
        <div class="mb-8">
          <div class="flex items-center justify-between">
            <div v-for="(step, index) in steps" :key="step.id" class="flex items-center">
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center"
                :class="[
                  currentStep >= index ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600',
                  'transition-colors'
                ]"
              >
                {{ index + 1 }}
              </div>
              <div 
                v-if="index < steps.length - 1"
                class="w-24 h-1 mx-2"
                :class="currentStep > index ? 'bg-primary' : 'bg-gray-200'"
              ></div>
            </div>
          </div>
          <div class="flex justify-between mt-2">
            <span 
              v-for="step in steps" 
              :key="step.id"
              class="text-sm"
              :class="currentStep >= step.id ? 'text-primary' : 'text-gray-500'"
            >
              {{ step.title }}
            </span>
          </div>
        </div>

        <!-- Step Content -->
        <div class="bg-surface rounded-lg p-6 shadow-sm">
          <!-- Cart Review -->
          <div v-if="currentStep === 0">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Review Your Cart</h2>
            <div class="space-y-4">
              <div v-for="item in cartStore.items" :key="item.id" class="flex items-center gap-4">
                <img 
                  :src="item.image" 
                  :alt="item.name"
                  class="w-16 h-16 object-cover rounded"
                />
                <div class="flex-1">
                  <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</h3>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Qty: {{ item.quantity }}</p>
                </div>
                <p class="text-sm font-medium text-gray-900 dark:text-gray-100">${{ (item.price * item.quantity).toFixed(2) }}</p>
              </div>
            </div>
            <div class="mt-6 flex justify-end">
              <button
                @click="nextStep"
                class="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Continue to Shipping
              </button>
            </div>
          </div>

          <!-- Shipping Address -->
          <div v-if="currentStep === 1">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Shipping Address</h2>
            
            <!-- Saved Addresses -->
            <div v-if="savedAddresses.length" class="mb-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  v-for="address in savedAddresses" 
                  :key="address.id"
                  class="relative border rounded-lg p-4 cursor-pointer transition-colors"
                  :class="[
                    selectedAddressId === address.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                  ]"
                  @click="selectAddress(address)"
                >
                  <div class="flex items-start justify-between">
                    <div>
                      <h3 class="font-medium text-gray-900 dark:text-gray-100">
                        {{ address.firstName }} {{ address.lastName }}
                      </h3>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {{ address.street }}<br>
                        {{ address.city }}, {{ address.state }} {{ address.zipCode }}<br>
                        {{ address.country }}
                      </p>
                      <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {{ address.phone }}
                      </p>
                    </div>
                    <div v-if="address.isDefault" class="text-xs font-medium text-primary">
                      Default
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  @click="showNewAddressForm = !showNewAddressForm"
                  class="text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                >
                  {{ showNewAddressForm ? 'Cancel' : '+ Add New Address' }}
                </button>
              </div>
            </div>

            <!-- New Address Form -->
            <div v-if="showNewAddressForm || !savedAddresses.length">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    v-model="shippingAddress.firstName"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="shippingAddress.lastName"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <div class="md:col-span-2">
                  <label for="street" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Street Address</label>
                  <input
                    type="text"
                    id="street"
                    v-model="shippingAddress.street"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300">City</label>
                  <input
                    type="text"
                    id="city"
                    v-model="shippingAddress.city"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label for="state" class="block text-sm font-medium text-gray-700 dark:text-gray-300">State/Province</label>
                  <input
                    type="text"
                    id="state"
                    v-model="shippingAddress.state"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label for="zipCode" class="block text-sm font-medium text-gray-700 dark:text-gray-300">ZIP/Postal Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    v-model="shippingAddress.zipCode"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label for="country" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Country</label>
                  <input
                    type="text"
                    id="country"
                    v-model="shippingAddress.country"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="shippingAddress.phone"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <div class="md:col-span-2">
                  <label class="flex items-center">
                    <input
                      type="checkbox"
                      v-model="saveAddress"
                      class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">Save this address for future orders</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="mt-6 flex justify-between">
              <button
                @click="prevStep"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Back to Cart
              </button>
              <button
                @click="nextStep"
                class="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Continue to Delivery
              </button>
            </div>
          </div>

          <!-- Delivery Options -->
          <div v-if="currentStep === 2">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Delivery Options</h2>
            
            <div class="space-y-4">
              <div 
                v-for="option in deliveryOptions" 
                :key="option.id"
                class="border rounded-lg p-4 cursor-pointer transition-colors"
                :class="[
                  selectedDeliveryOption === option.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-primary/50'
                ]"
                @click="selectedDeliveryOption = option.id"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="font-medium text-gray-900 dark:text-gray-100">{{ option.name }}</h3>
                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ option.description }}</p>
                  </div>
                  <p class="text-sm font-medium text-gray-900 dark:text-gray-100">${{ option.price.toFixed(2) }}</p>
                </div>
              </div>
            </div>

            <div class="mt-6 flex justify-between">
              <button
                @click="prevStep"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Back to Shipping
              </button>
              <button
                @click="nextStep"
                class="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Continue to Payment
              </button>
            </div>
          </div>

          <!-- Payment Method -->
          <div v-if="currentStep === 3">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Payment Method</h2>
            
            <div class="space-y-4">
              <div class="flex items-center">
                <input
                  type="radio"
                  id="creditCard"
                  value="credit_card"
                  v-model="paymentMethod"
                  class="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                />
                <label for="creditCard" class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Credit Card
                </label>
              </div>

              <!-- Stripe Payment Form -->
              <div v-if="paymentMethod === 'credit_card'" class="mt-4">
                <PaymentForm
                  :amount="cartStore.totalAmount"
                  currency="usd"
                  @success="handlePaymentSuccess"
                  @error="handlePaymentError"
                />
              </div>

              <div class="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  value="paypal"
                  v-model="paymentMethod"
                  class="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                />
                <label for="paypal" class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  PayPal
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="radio"
                  id="bankTransfer"
                  value="bank_transfer"
                  v-model="paymentMethod"
                  class="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                />
                <label for="bankTransfer" class="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Bank Transfer
                </label>
              </div>
            </div>

            <div class="mt-6 flex justify-between">
              <button
                @click="prevStep"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Back to Delivery
              </button>
              <button
                v-if="paymentMethod !== 'credit_card'"
                @click="nextStep"
                class="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Review Order
              </button>
            </div>
          </div>

          <!-- Order Summary -->
          <div v-if="currentStep === 4">
            <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Order Summary</h2>
            
            <div class="space-y-6">
              <!-- Shipping Address -->
              <div>
                <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Shipping Address</h3>
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ shippingAddress.firstName }} {{ shippingAddress.lastName }}<br>
                    {{ shippingAddress.street }}<br>
                    {{ shippingAddress.city }}, {{ shippingAddress.state }} {{ shippingAddress.zipCode }}<br>
                    {{ shippingAddress.country }}<br>
                    {{ shippingAddress.phone }}
                  </p>
                </div>
              </div>

              <!-- Delivery Method -->
              <div>
                <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Delivery Method</h3>
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ deliveryOptions.find(opt => opt.id === selectedDeliveryOption)?.name }}
                  </p>
                </div>
              </div>

              <!-- Payment Method -->
              <div>
                <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Payment Method</h3>
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    {{ paymentMethod === 'credit_card' ? 'Credit Card' : 
                       paymentMethod === 'paypal' ? 'PayPal' : 'Bank Transfer' }}
                  </p>
                </div>
              </div>

              <!-- Order Items -->
              <div>
                <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Order Items</h3>
                <div class="space-y-4">
                  <div v-for="item in cartStore.items" :key="item.id" class="flex items-center gap-4">
                    <img 
                      :src="item.image" 
                      :alt="item.name"
                      class="w-16 h-16 object-cover rounded"
                    />
                    <div class="flex-1">
                      <h4 class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</h4>
                      <p class="text-sm text-gray-500 dark:text-gray-400">Qty: {{ item.quantity }}</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900 dark:text-gray-100">${{ (item.price * item.quantity).toFixed(2) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-6 flex justify-between">
              <button
                @click="prevStep"
                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              >
                Back to Payment
              </button>
              <button
                @click="placeOrder"
                :disabled="isPlacingOrder"
                class="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isPlacingOrder ? 'Processing...' : 'Place Order' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary Sidebar -->
      <div class="lg:w-1/3">
        <div class="bg-surface rounded-lg shadow-sm p-6 sticky top-8">
          <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Order Summary</h2>
          
          <div class="space-y-4">
            <div v-for="item in cartStore.items" :key="item.id" class="flex items-center gap-4">
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-16 h-16 object-cover rounded"
              />
              <div class="flex-1">
                <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ item.name }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Qty: {{ item.quantity }}</p>
              </div>
              <p class="text-sm font-medium text-gray-900 dark:text-gray-100">${{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>
          </div>

          <div class="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 space-y-2">
            <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Subtotal</span>
              <span>${{ cartStore.totalAmount.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Shipping</span>
              <span v-if="selectedDeliveryOption">
                ${{ deliveryOptions.find(opt => opt.id === selectedDeliveryOption)?.price.toFixed(2) }}
              </span>
              <span v-else>Calculated at checkout</span>
            </div>
            <div class="flex justify-between text-base font-medium text-gray-900 dark:text-gray-100">
              <span>Total</span>
              <span>${{ (cartStore.totalAmount + (selectedDeliveryOption ? deliveryOptions.find(opt => opt.id === selectedDeliveryOption)?.price || 0 : 0)).toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCartStore } from '~/stores/cart'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'

interface Address {
  id: string
  userId: string
  firstName: string
  lastName: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string | null
  isDefault: boolean
  createdAt: string
  updatedAt: string
}

interface ShippingAddress {
  firstName: string
  lastName: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
}

interface DeliveryOption {
  id: string
  name: string
  description: string
  price: number
}

const cartStore = useCartStore()
const authStore = useAuthStore()
const router = useRouter()
const { $notification } = useNuxtApp()

const isLoading = ref(true)
const error = ref<string | null>(null)
const isPlacingOrder = ref(false)
const savedAddresses = ref<Address[]>([])
const selectedAddressId = ref<string | null>(null)
const showNewAddressForm = ref(false)
const saveAddress = ref(false)
const currentStep = ref(0)

const steps = [
  { id: 0, title: 'Cart' },
  { id: 1, title: 'Shipping' },
  { id: 2, title: 'Delivery' },
  { id: 3, title: 'Payment' },
  { id: 4, title: 'Review' }
]

const deliveryOptions = [
  {
    id: 'standard',
    name: 'Standard Shipping',
    description: '3-5 business days',
    price: 5.99
  },
  {
    id: 'express',
    name: 'Express Shipping',
    description: '1-2 business days',
    price: 12.99
  },
  {
    id: 'overnight',
    name: 'Overnight Shipping',
    description: 'Next business day',
    price: 24.99
  }
]

const selectedDeliveryOption = ref('standard')

const shippingAddress = ref<ShippingAddress>({
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  phone: ''
})

const paymentMethod = ref('credit_card')

// Initialize cart and fetch addresses
onMounted(async () => {
  try {
    await cartStore.initialize()
    if (authStore.isAuthenticated) {
      const addresses = await $fetch<Address[]>('/api/addresses', {
        headers: {
          'Authorization': `Bearer ${authStore.token}`
        }
      })
      savedAddresses.value = addresses
      
      // Select default address if exists
      const defaultAddress = addresses.find(addr => addr.isDefault)
      if (defaultAddress) {
        selectAddress(defaultAddress)
      }
    }

    // Check if we're returning from a successful payment
    const urlParams = new URLSearchParams(window.location.search)
    const paymentIntentId = urlParams.get('payment_intent')
    const paymentStatus = urlParams.get('redirect_status')

    if (paymentIntentId && paymentStatus === 'succeeded') {
      // Get the payment intent details
      const paymentIntent = await $fetch(`/api/payments/${paymentIntentId}`, {
        headers: {
          'Authorization': `Bearer ${authStore.token}`
        }
      })

      if (paymentIntent) {
        await handlePaymentSuccess(paymentIntent)
      }
    }
  } catch (e: any) {
    error.value = e.message || 'Failed to load data'
  } finally {
    isLoading.value = false
  }
})

// Navigation methods
const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

// Select address
const selectAddress = (address: Address) => {
  selectedAddressId.value = address.id
  shippingAddress.value = {
    firstName: address.firstName,
    lastName: address.lastName,
    street: address.street,
    city: address.city,
    state: address.state,
    zipCode: address.zipCode,
    country: address.country,
    phone: address.phone || ''
  }
  showNewAddressForm.value = false
}

// Place order
const placeOrder = async () => {
  if (!authStore.isAuthenticated) {
    router.push('/auth/login?redirect=/checkout')
    return
  }

  try {
    isPlacingOrder.value = true
    error.value = null

    let addressId = selectedAddressId.value

    // If no address is selected or using a new address
    if (!addressId || showNewAddressForm.value) {
      try {
        const addressResponse = await $fetch('/api/addresses', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${authStore.token}`,
            'Content-Type': 'application/json'
          },
          body: {
            ...shippingAddress.value,
            isDefault: saveAddress.value
          }
        })
        addressId = addressResponse.id
        $notification.show({
          type: 'success',
          title: 'Success',
          message: 'Address saved successfully',
          timeout: 5000
        })
      } catch (err: any) {
        $notification.show({
          type: 'error',
          title: 'Error',
          message: err.data?.message || err.message || 'Failed to save address',
          timeout: 5000
        })
        throw err
      }
    }

    // Create order
    const orderResponse = await $fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authStore.token}`,
        'Content-Type': 'application/json'
      },
      body: {
        shippingAddressId: addressId,
        paymentMethod: paymentMethod.value,
        deliveryOption: selectedDeliveryOption.value
      }
    })

    // Only clear the cart after successful order creation
    cartStore.items = []

    $notification.show({
      type: 'success',
      title: 'Success',
      message: 'Order placed successfully',
      timeout: 5000
    })

    // Redirect to order confirmation
    router.push(`/account/orders/`)
  } catch (e: any) {
    error.value = e.message || 'Failed to place order'
    $notification.show({
      type: 'error',
      title: 'Error',
      message: e.data?.message || e.message || 'Failed to place order',
      timeout: 5000
    })
  } finally {
    isPlacingOrder.value = false
  }
}

const handlePaymentSuccess = async (paymentIntent: any) => {
  try {
    isPlacingOrder.value = true
    error.value = null
    const { $notification } = useNuxtApp()

    let addressId = selectedAddressId.value

    // If no address is selected or using a new address
    if (!addressId || showNewAddressForm.value) {
      try {
        const addressResponse = await $fetch('/api/addresses', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${authStore.token}`,
            'Content-Type': 'application/json'
          },
          body: {
            ...shippingAddress.value,
            isDefault: saveAddress.value
          }
        })
        addressId = addressResponse.id
        $notification.show({
          type: 'success',
          title: 'Success',
          message: 'Address saved successfully',
          timeout: 5000
        })
      } catch (err: any) {
        $notification.show({
          type: 'error',
          title: 'Error',
          message: err.data?.message || err.message || 'Failed to save address',
          timeout: 5000
        })
        throw err
      }
    }

    // Create order with payment intent
    const orderResponse = await $fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authStore.token}`,
        'Content-Type': 'application/json'
      },
      body: {
        items: cartStore.items.map(item => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price
        })),
        total: cartStore.totalAmount,
        shippingAddressId: addressId,
        paymentMethod: paymentMethod.value,
        paymentIntentId: paymentIntent.id,
        deliveryOption: selectedDeliveryOption.value,
        status: 'PAID'
      }
    })

    // Clear cart and redirect to success page
    cartStore.clearCart()
    $notification.show({
      type: 'success',
      title: 'Success',
      message: 'Payment successful and order placed',
      timeout: 5000
    })
    navigateTo('/checkout/success')
  } catch (err: any) {
    const { $notification } = useNuxtApp()
    console.error('Error creating order:', err)
    error.value = err.message || 'Failed to process payment. Please try again.'
    $notification.show({
      type: 'error',
      title: 'Error',
      message: err.data?.message || err.message || 'Failed to process payment',
      timeout: 5000
    })
  } finally {
    isPlacingOrder.value = false
  }
}

const handlePaymentError = (err: any) => {
  const { $notification } = useNuxtApp()
  console.error('Payment error:', err)
  error.value = err.message || 'Payment failed. Please try again.'
  $notification.show({
    type: 'error',
    title: 'Error',
    message: err.message || 'Payment failed. Please try again.',
    timeout: 5000
  })
}
</script>

<style scoped>
.bg-surface {
  background-color: var(--color-surface);
}

.text-primary {
  color: var(--color-primary);
}

.hover\:text-primary-dark:hover {
  filter: brightness(0.9);
}

.border-border {
  border-color: var(--color-border);
}

.hover\:bg-primary-dark:hover {
  filter: brightness(0.9);
}
</style> 