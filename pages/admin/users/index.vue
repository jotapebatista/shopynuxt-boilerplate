<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-2xl font-semibold text-primary">Users</h1>
        <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">A list of all users in your application including their name, email, role, and status.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          @click="openAddUserModal"
          class="inline-flex items-center justify-center rounded-lg border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          Add user
        </button>
      </div>
    </div>

    <!-- Search and Filter -->
    <div class="mt-4 flex flex-col sm:flex-row gap-4">
      <div class="flex-1">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search users..."
            class="block w-full pl-10 p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          />
        </div>
      </div>
      <div class="w-full sm:w-48">
        <select
          v-model="roleFilter"
          class="block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
        >
          <option value="">All Roles</option>
          <option value="ADMIN">Admin</option>
          <option value="USER">User</option>
        </select>
      </div>
      <div class="w-full sm:w-48">
        <select
          v-model="statusFilter"
          class="block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </div>

    <!-- Users Table -->
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-border">
              <thead class="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 sm:pl-6">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Email</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Role</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Status</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Last Updated</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-border bg-surface">
                <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <div class="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <span class="text-gray-500 dark:text-gray-400 text-sm">{{ user.firstName[0] }}{{ user.lastName[0] }}</span>
                        </div>
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900 dark:text-gray-100">{{ user.firstName }} {{ user.lastName }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">{{ user.email }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                    <span
                      :class="[
                        user.role === 'ADMIN' ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
                        'inline-flex rounded-full px-2 text-xs font-semibold leading-5'
                      ]"
                    >
                      {{ user.role }}
                    </span>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                    <div class="flex items-center space-x-3">
                      <span
                        :class="[
                          user.isActive ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
                          'inline-flex rounded-full px-2 text-xs font-semibold leading-5'
                        ]"
                      >
                        {{ user.isActive ? 'Active' : 'Inactive' }}
                      </span>
                      <button
                        @click="toggleUserStatus(user)"
                        :class="[
                          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                          user.isActive ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                        ]"
                        role="switch"
                        :aria-checked="user.isActive"
                      >
                        <span
                          :class="[
                            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                            user.isActive ? 'translate-x-5' : 'translate-x-0'
                          ]"
                        />
                      </button>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {{ new Date(user.updatedAt).toLocaleDateString() }}
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <button
                      @click="editUser(user)"
                      class="text-primary hover:text-primary-dark mr-4 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button
                      @click="deleteUser(user)"
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

    <!-- Add/Edit User Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 flex items-center justify-center">
      <div class="bg-surface rounded-lg p-6 max-w-md w-full">
        <h2 class="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">{{ editingUser ? 'Edit User' : 'Add User' }}</h2>
        <form @submit.prevent="saveUser">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
              <input
                v-model="userForm.firstName"
                type="text"
                required
                class="mt-1 block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
              <input
                v-model="userForm.lastName"
                type="text"
                required
                class="mt-1 block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                v-model="userForm.email"
                type="email"
                required
                class="mt-1 block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                v-model="userForm.password"
                type="password"
                :required="!editingUser"
                class="mt-1 block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Role</label>
              <select
                v-model="userForm.role"
                required
                class="mt-1 block w-full p-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
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
              {{ editingUser ? 'Update' : 'Create' }}
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

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  role: string
  isActive: boolean
  updatedAt: string
}

// State
const users = ref<User[]>([])
const searchQuery = ref('')
const roleFilter = ref('')
const statusFilter = ref('')
const showModal = ref(false)
const editingUser = ref<User | null>(null)
const userForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  role: 'USER'
})

// Computed
const filteredUsers = computed(() => {
  return users.value.filter(user => {
    const matchesSearch = user.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesRole = !roleFilter.value || user.role === roleFilter.value
    const matchesStatus = !statusFilter.value || 
      (statusFilter.value === 'active' && user.isActive) ||
      (statusFilter.value === 'inactive' && !user.isActive)

    return matchesSearch && matchesRole && matchesStatus
  })
})

// Methods
const fetchUsers = async () => {
  try {
    const { $notification } = useNuxtApp()
    const response = await $fetch('/api/users')
    users.value = response
    if (response.length === 0) {
      $notification.show({
        type: 'info',
        title: 'Info',
        message: 'No users found',
        timeout: 5000
      })
    }
  } catch (error: any) {
    const { $notification } = useNuxtApp()
    console.error('Error fetching users:', error)
    $notification.show({
      type: 'error',
      title: 'Error',
      message: error.data?.message || error.message || 'Failed to fetch users',
      timeout: 5000
    })
  }
}

const openAddUserModal = () => {
  editingUser.value = null
  userForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'USER'
  }
  showModal.value = true
}

const editUser = (user: User) => {
  editingUser.value = user
  userForm.value = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: '',
    role: user.role
  }
  showModal.value = true
}

const saveUser = async () => {
  try {
    const { $notification } = useNuxtApp()
    if (editingUser.value) {
      await $fetch(`/api/users/${editingUser.value.id}`, {
        method: 'PUT',
        body: userForm.value
      })
      $notification.show({
        type: 'success',
        title: 'Success',
        message: 'User updated successfully',
        timeout: 5000
      })
    } else {
      await $fetch('/api/users', {
        method: 'POST',
        body: userForm.value
      })
      $notification.show({
        type: 'success',
        title: 'Success',
        message: 'User created successfully',
        timeout: 5000
      })
    }
    showModal.value = false
    await fetchUsers()
  } catch (error: any) {
    const { $notification } = useNuxtApp()
    console.error('Error saving user:', error)
    $notification.show({
      type: 'error',
      title: 'Error',
      message: error.data?.message || error.message || 'Failed to save user',
      timeout: 5000
    })
  }
}

const deleteUser = async (user: User) => {
  if (!confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}?`)) {
    return
  }

  try {
    const { $notification } = useNuxtApp()
    await $fetch(`/api/users/${user.id}`, {
      method: 'DELETE'
    })
    $notification.show({
      type: 'success',
      title: 'Success',
      message: 'User deleted successfully',
      timeout: 5000
    })
    await fetchUsers()
  } catch (error: any) {
    const { $notification } = useNuxtApp()
    console.error('Error deleting user:', error)
    $notification.show({
      type: 'error',
      title: 'Error',
      message: error.data?.message || error.message || 'Failed to delete user',
      timeout: 5000
    })
  }
}

const toggleUserStatus = async (user: User) => {
  try {
    const { $notification } = useNuxtApp()
    await $fetch(`/api/users/${user.id}/toggle-status`, {
      method: 'PUT'
    })
    $notification.show({
      type: 'success',
      title: 'Success',
      message: `User ${user.isActive ? 'deactivated' : 'activated'} successfully`,
      timeout: 5000
    })
    await fetchUsers()
  } catch (error: any) {
    const { $notification } = useNuxtApp()
    console.error('Error toggling user status:', error)
    $notification.show({
      type: 'error',
      title: 'Error',
      message: error.data?.message || error.message || 'Failed to update user status',
      timeout: 5000
    })
  }
}

// Initialize
fetchUsers()
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