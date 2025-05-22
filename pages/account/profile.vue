<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <!-- Profile Header -->
      <div class="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div class="px-4 py-5 sm:px-6 flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-semibold">
              {{ userInitials }}
            </div>
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                {{ form.firstName }} {{ form.lastName }}
              </h3>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {{ form.email }}
              </p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <button
              type="button"
              @click="handleSubmit"
              :disabled="loading"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ loading ? 'Saving...' : 'Save Changes' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Profile Form -->
      <div class="mt-6 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">Personal Information</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">First name</label>
                <div class="mt-1">
                  <input
                    type="text"
                    id="firstName"
                    v-model="form.firstName"
                    name="firstName"
                    required
                    class="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div class="sm:col-span-3">
                <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Last name</label>
                <div class="mt-1">
                  <input
                    type="text"
                    id="lastName"
                    v-model="form.lastName"
                    name="lastName"
                    required
                    class="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
                <div class="mt-1">
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    name="email"
                    required
                    class="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone number</label>
                <div class="mt-1">
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    name="phone"
                    class="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Change Password Section -->
      <div class="mt-6 bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-white mb-4">Change Password</h3>
          
          <form @submit.prevent="handlePasswordChange" class="space-y-6">
            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-4">
                <label for="currentPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Current password</label>
                <div class="mt-1">
                  <input
                    type="password"
                    id="currentPassword"
                    v-model="passwordForm.currentPassword"
                    name="currentPassword"
                    required
                    class="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="newPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300">New password</label>
                <div class="mt-1">
                  <input
                    type="password"
                    id="newPassword"
                    v-model="passwordForm.newPassword"
                    name="newPassword"
                    required
                    class="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm new password</label>
                <div class="mt-1">
                  <input
                    type="password"
                    id="confirmPassword"
                    v-model="passwordForm.confirmPassword"
                    name="confirmPassword"
                    required
                    class="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-primary sm:text-sm dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div class="flex justify-end">
              <button
                type="submit"
                :disabled="passwordLoading"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                <svg v-if="passwordLoading" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ passwordLoading ? 'Updating...' : 'Update Password' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Notifications -->
      <div v-if="error || success || passwordError || passwordSuccess" class="mt-6">
        <div v-if="error" class="rounded-md bg-red-50 dark:bg-red-900/50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800 dark:text-red-200">{{ error }}</p>
            </div>
          </div>
        </div>

        <div v-if="success" class="rounded-md bg-green-50 dark:bg-green-900/50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-green-800 dark:text-green-200">{{ success }}</p>
            </div>
          </div>
        </div>

        <div v-if="passwordError" class="rounded-md bg-red-50 dark:bg-red-900/50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800 dark:text-red-200">{{ passwordError }}</p>
            </div>
          </div>
        </div>

        <div v-if="passwordSuccess" class="rounded-md bg-green-50 dark:bg-green-900/50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-green-800 dark:text-green-200">{{ passwordSuccess }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
})

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const loading = ref(false)
const passwordLoading = ref(false)
const error = ref('')
const success = ref('')
const passwordError = ref('')
const passwordSuccess = ref('')

const userInitials = computed(() => {
  if (!form.value.firstName || !form.value.lastName) return ''
  return `${form.value.firstName[0]}${form.value.lastName[0]}`
})

onMounted(async () => {
  try {
    // Fetch user profile data using auth store
    const user = await authStore.fetchUserProfile()
    if (user) {
      form.value = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone || ''
      }
    } else {
      error.value = 'Failed to load profile data'
    }
  } catch (err: any) {
    error.value = 'Failed to load profile data'
  }
})

const handleSubmit = async () => {
  try {
    loading.value = true
    error.value = ''
    success.value = ''

    const { data: updatedUser } = await useFetch('/api/users/me', {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${authStore.token}`,
        'Content-Type': 'application/json'
      },
      body: form.value
    })

    if (updatedUser.value) {
      // Update auth store with new user data
      authStore.setAuth(authStore.token!, updatedUser.value)
      success.value = 'Profile updated successfully'
    } else {
      error.value = 'Failed to update profile'
    }
  } catch (err: any) {
    error.value = err.message || 'Failed to update profile'
  } finally {
    loading.value = false
  }
}

const handlePasswordChange = async () => {
  try {
    passwordLoading.value = true
    passwordError.value = ''
    passwordSuccess.value = ''

    // Validate passwords match
    if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
      passwordError.value = 'New passwords do not match'
      return
    }

    // Validate password strength
    if (passwordForm.value.newPassword.length < 8) {
      passwordError.value = 'Password must be at least 8 characters long'
      return
    }

    const { data } = await useFetch('/api/users/change-password', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authStore.token}`,
        'Content-Type': 'application/json'
      },
      body: {
        currentPassword: passwordForm.value.currentPassword,
        newPassword: passwordForm.value.newPassword
      }
    })

    if (data.value) {
      passwordSuccess.value = 'Password updated successfully'
      passwordForm.value = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
    } else {
      passwordError.value = 'Failed to update password'
    }
  } catch (err: any) {
    passwordError.value = err.message || 'Failed to update password'
  } finally {
    passwordLoading.value = false
  }
}
</script> 