<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-2xl font-semibold text-primary">Categories</h1>
        <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">A list of all categories in your application including their name and description.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          @click="openAddCategoryModal"
          class="inline-flex items-center justify-center rounded-lg border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          Add category
        </button>
      </div>
    </div>

    <!-- Search -->
    <div class="mt-4">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
        </div>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search categories..."
          class="block w-full pl-10 p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
        />
      </div>
    </div>

    <!-- Categories Table -->
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-border">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Description</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border bg-surface">
                <tr v-for="category in filteredCategories" :key="category.id" class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100 sm:pl-6">
                    {{ category.name }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {{ category.description }}
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button
                      @click="editCategory(category)"
                      class="text-primary hover:text-primary-dark mr-4 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button
                      @click="deleteCategory(category)"
                      class="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Add/Edit Category Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 flex items-center justify-center">
      <div class="bg-surface rounded-lg p-6 max-w-md w-full">
        <h2 class="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">{{ editingCategory ? 'Edit Category' : 'Add Category' }}</h2>
        <form @submit.prevent="saveCategory">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                v-model="categoryForm.name"
                type="text"
                required
                class="mt-1 block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
              <textarea
                v-model="categoryForm.description"
                rows="3"
                required
                class="mt-1 block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              ></textarea>
            </div>
          </div>
          <div class="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              @click="showModal = false"
              class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="inline-flex justify-center rounded-lg border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            >
              {{ editingCategory ? 'Update' : 'Create' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import { ref, computed } from 'vue'
import { useNuxtApp } from '#app'

interface Category {
  id: string
  name: string
  description: string
}

// State
const categories = ref<Category[]>([])
const searchQuery = ref('')
const showModal = ref(false)
const editingCategory = ref<Category | null>(null)
const categoryForm = ref({
  name: '',
  description: ''
})

// Computed
const filteredCategories = computed(() => {
  return categories.value.filter(category => {
    return category.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})

// Methods
const fetchCategories = async () => {
  try {
    const response = await $fetch('/api/categories')
    categories.value = response
  } catch (error: any) {
    const { $notification } = useNuxtApp()
    const errorMessage = error.data?.message || error.message || 'Failed to fetch categories'
    $notification.show({
      type: 'error',
      title: 'Error',
      message: errorMessage,
      timeout: 5000
    })
  }
}

const openAddCategoryModal = () => {
  editingCategory.value = null
  categoryForm.value = {
    name: '',
    description: ''
  }
  showModal.value = true
}

const editCategory = (category: Category) => {
  editingCategory.value = category
  categoryForm.value = {
    name: category.name,
    description: category.description
  }
  showModal.value = true
}

const saveCategory = async () => {
  try {
    const { $notification } = useNuxtApp()
    if (editingCategory.value) {
      await $fetch(`/api/categories/${editingCategory.value.id}`, {
        method: 'PUT',
        body: categoryForm.value
      })
      $notification.show({
        type: 'success',
        title: 'Success',
        message: 'Category updated successfully',
        timeout: 5000
      })
    } else {
      await $fetch('/api/categories', {
        method: 'POST',
        body: categoryForm.value
      })
      $notification.show({
        type: 'success',
        title: 'Success',
        message: 'Category created successfully',
        timeout: 5000
      })
    }
    showModal.value = false
    await fetchCategories()
  } catch (error: any) {
    const { $notification } = useNuxtApp()
    const errorMessage = error.data?.message || error.message || 'Failed to save category'
    $notification.show({
      type: 'error',
      title: 'Error',
      message: errorMessage,
      timeout: 5000
    })
  }
}

const deleteCategory = async (category: Category) => {
  if (!confirm(`Are you sure you want to delete ${category.name}?`)) {
    return
  }

  try {
    await $fetch(`/api/categories/${category.id}`, {
      method: 'DELETE'
    })
    await fetchCategories()
    const { $notification } = useNuxtApp()
    $notification.show({
      type: 'success',
      title: 'Success',
      message: 'Category deleted successfully',
      timeout: 5000
    })
  } catch (error: any) {
    const { $notification } = useNuxtApp()
    // Extract the error message from the response
    const errorMessage = error.data?.message || error.message || 'Failed to delete category'
    $notification.show({
      type: 'error',
      title: 'Error',
      message: errorMessage,
      timeout: 5000
    })
  }
}

// Initialize
fetchCategories()
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

.hover\:bg-primary-dark:hover {
  filter: brightness(0.9);
}
</style> 