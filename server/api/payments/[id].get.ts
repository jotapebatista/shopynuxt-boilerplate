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

    // Get payment intent ID from params
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Payment intent ID is required'
      })
    }

    // Retrieve payment intent
    const paymentIntent = await stripe.paymentIntents.retrieve(id)

    // Verify the payment intent belongs to the user
    if (paymentIntent.metadata.userId !== user.id) {
      throw createError({
        statusCode: 403,
        message: 'Forbidden'
      })
    }

    return paymentIntent
  } catch (error: any) {
    console.error('Error retrieving payment intent:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.message || 'Internal server error'
    })
  }
}) 