<template>
  <div class="min-h-screen bg-background flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-primary">
        Create your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
        Or
        <NuxtLink to="/login" class="font-medium text-primary hover:text-primary-dark transition-colors">
          sign in to your existing account
        </NuxtLink>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-surface py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleRegister">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                First name
              </label>
              <div class="mt-1">
                <input
                  id="firstName"
                  v-model="firstName"
                  name="firstName"
                  type="text"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Last name
              </label>
              <div class="mt-1">
                <input
                  id="lastName"
                  v-model="lastName"
                  name="lastName"
                  type="text"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="new-password"
                required
                class="appearance-none block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Confirm password
            </label>
            <div class="mt-1">
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                name="confirmPassword"
                type="password"
                autocomplete="new-password"
                required
                class="appearance-none block w-full px-3 py-2 border border-border rounded-md shadow-sm bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors sm:text-sm"
              />
            </div>
          </div>

          <div class="flex items-center">
            <input
              id="terms"
              v-model="acceptTerms"
              name="terms"
              type="checkbox"
              required
              class="h-4 w-4 text-primary focus:ring-primary border-border rounded transition-colors"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-900 dark:text-gray-100">
              I agree to the
              <a href="#" class="text-primary hover:text-primary-dark transition-colors">Terms and Conditions</a>
              and
              <a href="#" class="text-primary hover:text-primary-dark transition-colors">Privacy Policy</a>
            </label>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Create account
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-border" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-surface text-gray-500 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 border border-border rounded-md shadow-sm bg-surface text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span class="sr-only">Sign up with Google</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="w-full inline-flex justify-center py-2 px-4 border border-border rounded-md shadow-sm bg-surface text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span class="sr-only">Sign up with Facebook</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)

const handleRegister = async () => {
  try {
    if (password.value !== confirmPassword.value) {
      alert('Passwords do not match')
      return
    }

    // Implement registration logic here
    console.log('Registration attempt:', {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
      acceptTerms: acceptTerms.value
    })
  } catch (error) {
    console.error('Registration error:', error)
  }
}
</script>

<style scoped>
.bg-background {
  background-color: var(--color-background);
}

.bg-surface {
  background-color: var(--color-surface);
}

.text-primary {
  color: var(--color-primary);
}

.border-border {
  border-color: var(--color-border);
}

.hover\:text-primary-dark:hover {
  filter: brightness(0.9);
}

.hover\:bg-primary-dark:hover {
  filter: brightness(0.9);
}
</style> 