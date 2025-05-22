// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      title: 'Shopynuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A modern e-commerce starter template built with Nuxt 3' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000',
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    }
  },
  imports: {
    dirs: ['stores', 'composables']
  },
  typescript: {
    strict: true
  }
}) 