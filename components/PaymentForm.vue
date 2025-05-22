<template>
  <div class="w-full max-w-md mx-auto">
    <div v-if="error" class="mb-4 p-4 bg-red-100 text-red-700 rounded">
      {{ error }}
    </div>

    <div v-if="success" class="mb-4 p-4 bg-green-100 text-green-700 rounded">
      Payment successful!
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Card Information</label>
          <div
            ref="cardElement"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
      </div>

      <button
        type="submit"
        class="w-full bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors"
        :disabled="isProcessing"
      >
        {{ isProcessing ? 'Processing...' : `Pay ${formatAmount(amount)}` }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { loadStripe } from '@stripe/stripe-js'
import type { Stripe, StripeElements } from '@stripe/stripe-js'

const props = defineProps<{
  amount: number
  currency?: string
}>()

const emit = defineEmits<{
  (e: 'success', paymentIntent: any): void
  (e: 'error', error: any): void
}>()

const config = useRuntimeConfig()
const stripe = ref<Stripe | null>(null)
const elements = ref<StripeElements | null>(null)
const cardElement = ref<HTMLElement | null>(null)
const error = ref('')
const success = ref(false)
const isProcessing = ref(false)

const formatAmount = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: props.currency || 'USD'
  }).format(amount)
}

const initializeStripe = async () => {
  try {
    stripe.value = await loadStripe(config.public.stripePublishableKey)
    if (!stripe.value) throw new Error('Failed to initialize Stripe')

    const { createPaymentIntent } = useStripe()
    const { clientSecret } = await createPaymentIntent(props.amount, props.currency)

    elements.value = stripe.value.elements({
      clientSecret,
      appearance: {
        theme: 'stripe',
        variables: {
          colorPrimary: '#4F46E5'
        }
      }
    })

    if (cardElement.value) {
      const card = elements.value.create('payment')
      card.mount(cardElement.value)
    }
  } catch (err: any) {
    error.value = err.message || 'Failed to initialize payment form'
    emit('error', err)
  }
}

const handleSubmit = async () => {
  if (!stripe.value || !elements.value) {
    error.value = 'Payment system not initialized'
    return
  }

  isProcessing.value = true
  error.value = ''
  success.value = false

  try {
    const result = await stripe.value.confirmPayment({
      elements: elements.value,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success`
      },
      redirect: 'if_required'
    })

    if (result.error) {
      throw result.error
    }

    if (result.paymentIntent) {
      success.value = true
      emit('success', result.paymentIntent)
    }
  } catch (err: any) {
    error.value = err.message || 'Payment failed'
    emit('error', err)
  } finally {
    isProcessing.value = false
  }
}

onMounted(initializeStripe)
</script> 