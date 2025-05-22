<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <NuxtLink to="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            sign in to your account
          </NuxtLink>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="firstName" class="sr-only">First Name</label>
              <input
                id="firstName"
                v-model="form.firstName"
                name="firstName"
                type="text"
                required
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
              />
            </div>
            <div>
              <label for="lastName" class="sr-only">Last Name</label>
              <input
                id="lastName"
                v-model="form.lastName"
                name="lastName"
                type="text"
                required
                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div class="mt-4">
            <label for="email" class="sr-only">Email address</label>
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div class="mt-4">
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="form.password"
              name="password"
              type="password"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div class="mt-4">
            <label for="confirmPassword" class="sr-only">Confirm Password</label>
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              name="confirmPassword"
              type="password"
              required
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span v-if="loading">Creating account...</span>
            <span v-else>Create account</span>
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
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const loading = ref(false)
const error = ref('')

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

    const response = await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        email: form.value.email,
        password: form.value.password
      }
    })

    // Store auth data and redirect
    authStore.setAuth(response.token, response.user)
    router.push('/')
  } catch (err: any) {
    error.value = err.message || 'An error occurred during registration'
  } finally {
    loading.value = false
  }
}
</script> 