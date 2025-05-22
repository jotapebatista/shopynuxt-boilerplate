import { loadStripe } from '@stripe/stripe-js'
import { useAuthStore } from '~/stores/auth'

export const useStripe = () => {
  const config = useRuntimeConfig()
  const authStore = useAuthStore()
  const stripePromise = loadStripe(config.public.stripePublishableKey)

  const createPaymentIntent = async (amount: number, currency: string = 'usd') => {
    try {
      const response = await fetch('/api/payments/create-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authStore.token}`
        },
        body: JSON.stringify({ amount, currency })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Failed to create payment intent')
      }
      return await response.json()
    } catch (error) {
      console.error('Error creating payment intent:', error)
      throw error
    }
  }

  const confirmPayment = async (clientSecret: string, paymentMethod: any) => {
    const stripe = await stripePromise
    if (!stripe) throw new Error('Stripe failed to initialize')

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod
      })

      if (error) {
        throw error
      }

      return paymentIntent
    } catch (error) {
      console.error('Error confirming payment:', error)
      throw error
    }
  }

  return {
    createPaymentIntent,
    confirmPayment
  }
} 