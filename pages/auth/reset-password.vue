<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset your password</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Enter your new password below.
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="password" class="sr-only">New Password</label>
            <input
              id="password"
              v-model="form.password"
              name="password"
              type="password"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="New Password"
            />
          </div>
          <div class="mt-4">
            <label for="confirmPassword" class="sr-only">Confirm New Password</label>
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              name="confirmPassword"
              type="password"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm New Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span v-if="loading">Resetting password...</span>
            <span v-else>Reset password</span>
          </button>
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const form = ref({
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')

onMounted(() => {
  // Validate token on mount
  const token = route.query.token as string
  if (!token) {
    error.value = 'Invalid or missing reset token'
    return
  }
})

const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = ''

    // Validate passwords match
    if (form.value.password !== form.value.confirmPassword) {
      error.value = 'Passwords do not match'
      return
    }

    // Validate password strength
    if (form.value.password.length < 8) {
      error.value = 'Password must be at least 8 characters long'
      return
    }

    const token = route.query.token as string
    await $fetch('/api/auth/reset-password', {
      method: 'POST',
      body: {
        token,
        password: form.value.password
      }
    })

    // Redirect to login page with success message
    router.push({
      path: '/auth/login',
      query: { message: 'Password has been reset successfully. Please log in with your new password.' }
    })
  } catch (err: any) {
    error.value = err.message || 'An error occurred while resetting your password'
  } finally {
    loading.value = false
  }
}
</script> 