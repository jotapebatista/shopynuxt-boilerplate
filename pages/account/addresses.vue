<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-semibold text-gray-900">Shipping Addresses</h1>
        <button
          @click="openAddressModal()"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Add New Address
        </button>
      </div>

      <div class="mt-6">
        <div v-if="loading" class="text-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p class="mt-4 text-gray-500">Loading addresses...</p>
        </div>

        <div v-else-if="addresses.length === 0" class="text-center py-12">
          <p class="text-gray-500">You haven't added any shipping addresses yet.</p>
        </div>

        <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="address in addresses"
            :key="address.id"
            class="bg-white shadow overflow-hidden sm:rounded-lg"
          >
            <div class="px-4 py-5 sm:p-6">
              <div class="flex justify-between items-start">
                <div>
                  <div class="flex items-center">
                    <h3 class="text-lg font-medium text-gray-900">
                      {{ address.firstName }} {{ address.lastName }}
                    </h3>
                    <span
                      v-if="address.isDefault"
                      class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                    >
                      Default
                    </span>
                  </div>
                  <p class="mt-1 text-sm text-gray-500">
                    {{ address.street }}<br />
                    {{ address.city }}, {{ address.state }} {{ address.zipCode }}<br />
                    {{ address.country }}
                  </p>
                  <p v-if="address.phone" class="mt-2 text-sm text-gray-500">
                    Phone: {{ address.phone }}
                  </p>
                </div>
                <div class="flex space-x-2">
                  <button
                    @click="openAddressModal(address)"
                    class="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                  <button
                    @click="deleteAddress(address.id)"
                    class="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Address Modal -->
    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ editingAddress ? 'Edit Address' : 'Add New Address' }}
            </h3>
            <form @submit.prevent="handleSubmit" class="mt-4 space-y-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  v-model="form.firstName"
                  required
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  v-model="form.lastName"
                  required
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label for="street" class="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                  type="text"
                  id="street"
                  v-model="form.street"
                  required
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    id="city"
                    v-model="form.city"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label for="state" class="block text-sm font-medium text-gray-700">State</label>
                  <input
                    type="text"
                    id="state"
                    v-model="form.state"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="zipCode" class="block text-sm font-medium text-gray-700">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    v-model="form.zipCode"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    id="country"
                    v-model="form.country"
                    required
                    class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label for="isDefault" class="flex items-center">
                  <input
                    type="checkbox"
                    id="isDefault"
                    v-model="form.isDefault"
                    class="form-checkbox h-4 w-4 text-indigo-600"
                  />
                  <span class="ml-2 text-sm text-gray-700">Set as default address</span>
                </label>
              </div>

              <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="submit"
                  :disabled="submitting"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                >
                  {{ submitting ? 'Saving...' : 'Save Address' }}
                </button>
                <button
                  type="button"
                  @click="closeModal"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Notification component -->
    <Notification
      v-if="notification"
      :show="!!notification"
      :type="notification.type"
      :title="notification.title"
      :message="notification.message"
      @close="notification = null"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useNotification } from '~/composables/useNotification'

interface Address {
  id: string
  firstName: string
  lastName: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string | null
  userId: string
  isDefault: boolean
  createdAt: string
  updatedAt: string
}

interface AddressForm {
  firstName: string
  lastName: string
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  phone: string
  isDefault: boolean
}

const addresses = ref<Address[]>([])
const loading = ref(true)
const error = ref('')
const showModal = ref(false)
const submitting = ref(false)
const editingAddress = ref<Address | null>(null)
const authStore = useAuthStore()
const { notification, show: showNotification } = useNotification()

const form = ref<AddressForm>({
  firstName: '',
  lastName: '',
  street: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  phone: '',
  isDefault: false
})

const fetchAddresses = async () => {
  try {
    loading.value = true
    const response = await $fetch<Address[]>('/api/addresses', {
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      }
    })
    addresses.value = response
  } catch (err: any) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: err.message || 'Failed to load addresses',
      timeout: 5000
    })
  } finally {
    loading.value = false
  }
}

const openAddressModal = (address?: Address) => {
  if (address) {
    editingAddress.value = address
    form.value = {
      firstName: address.firstName,
      lastName: address.lastName,
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      country: address.country,
      phone: address.phone || '',
      isDefault: address.isDefault
    }
  } else {
    editingAddress.value = null
    form.value = {
      firstName: '',
      lastName: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phone: '',
      isDefault: false
    }
  }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  editingAddress.value = null
  form.value = {
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
    isDefault: false
  }
}

const handleSubmit = async () => {
  try {
    submitting.value = true
    const addressData: AddressForm = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      street: form.value.street,
      city: form.value.city,
      state: form.value.state,
      zipCode: form.value.zipCode,
      country: form.value.country,
      phone: form.value.phone,
      isDefault: form.value.isDefault
    }

    if (editingAddress.value) {
      await $fetch(`/api/addresses/${editingAddress.value.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${authStore.token}`
        },
        body: addressData
      })
    } else {
      await $fetch('/api/addresses', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authStore.token}`
        },
        body: addressData
      })
    }
    await fetchAddresses()
    closeModal()
  } catch (err: any) {
    error.value = err.message || 'Failed to save address'
  } finally {
    submitting.value = false
  }
}

const deleteAddress = async (id: string) => {
  if (!confirm('Are you sure you want to delete this address?')) return

  try {
    await $fetch(`/api/addresses/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${authStore.token}`
      }
    })
    await fetchAddresses()
    showNotification({
      type: 'success',
      title: 'Success',
      message: 'Address deleted successfully',
      timeout: 3000
    })
  } catch (err: any) {
    showNotification({
      type: 'error',
      title: 'Error',
      message: err.data?.message || 'Failed to delete address. Please try again later.',
      timeout: 5000
    })
  }
}

onMounted(() => {
  fetchAddresses()
})
</script> 