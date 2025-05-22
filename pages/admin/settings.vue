<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-6">Store Settings</h1>

    <div class="bg-white rounded-lg shadow-lg p-6">
      <form @submit.prevent="saveSettings" class="space-y-6">
        <!-- Currency Setting -->
        <div>
          <label for="currency" class="block text-sm font-medium text-gray-700 mb-2">
            Default Currency
          </label>
          <select
            id="currency"
            v-model="settings.defaultCurrency"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option v-for="currency in currencies" :key="currency.code" :value="currency.code">
              {{ currency.name }} ({{ currency.symbol }})
            </option>
          </select>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            :disabled="isSaving"
          >
            {{ isSaving ? 'Saving...' : 'Save Settings' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import { ref, onMounted } from 'vue'

const isSaving = ref(false)

const settings = ref({
  defaultCurrency: 'EUR'
})

const currencies = [
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'GBP', name: 'British Pound', symbol: '£' }
]

const loadSettings = async () => {
  try {
    const response = await $fetch('/api/settings')
    settings.value = {
      defaultCurrency: response.defaultCurrency || 'EUR'
    }
  } catch (error) {
    console.error('Error loading settings:', error)
  }
}

const saveSettings = async () => {
  try {
    isSaving.value = true
    await $fetch('/api/settings', {
      method: 'PUT',
      body: settings.value
    })
    // Show success message
  } catch (error) {
    console.error('Error saving settings:', error)
    // Show error message
  } finally {
    isSaving.value = false
  }
}

onMounted(loadSettings)
</script> 