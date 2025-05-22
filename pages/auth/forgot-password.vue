<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label for="email" class="sr-only">Email address</label>
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            required
            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span v-if="loading">Sending reset link...</span>
            <span v-else>Send reset link</span>
          </button>
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>

        <div v-if="success" class="text-green-500 text-sm text-center">
          {{ success }}
        </div>

        <div class="text-center">
          <NuxtLink to="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            Back to login
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')

const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = ''
    success.value = ''

    await $fetch('/api/auth/forgot-password', {
      method: 'POST',
      body: {
        email: email.value
      }
    })

    success.value = 'If an account exists with this email, you will receive a password reset link shortly.'
    email.value = ''
  } catch (err: any) {
    error.value = err.message || 'An error occurred while sending the reset link'
  } finally {
    loading.value = false
  }
}
</script> 