import Stripe from 'stripe'
import { verifyAuth } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()
    const stripe = new Stripe(config.stripeSecretKey, {
      apiVersion: '2025-04-30.basil'
    })

    // Verify authentication
    const user = await verifyAuth(event)
    if (!user) {
      throw createError({
        statusCode: 401,
        message: 'Unauthorized'
      })
    }

    // Get request body
    const body = await readBody(event)
    const { amount, currency = 'usd' } = body

    if (!amount || amount <= 0) {
      throw createError({
        statusCode: 400,
        message: 'Invalid amount'
      })
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      automatic_payment_methods: {
        enabled: true
      },
      metadata: {
        userId: user.id
      }
    })

    return {
      clientSecret: paymentIntent.client_secret
    }
  } catch (error: any) {
    console.error('Error creating payment intent:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 