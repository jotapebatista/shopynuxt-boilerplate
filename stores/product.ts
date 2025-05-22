import { defineStore } from 'pinia'

interface Product {
  id: string
  name: string
  description: string
  price: number
  stock: number
  images: string[]
  specifications: Record<string, string>
  categoryId: string
  category?: {
    name: string
  }
}

interface ProductState {
  products: Product[]
  loading: boolean
  error: string | null
}

export const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: [],
    loading: false,
    error: null
  }),

  getters: {
    getProductById: (state) => (id: string) => {
      return state.products.find(product => product.id === id)
    },
    getProductsByCategory: (state) => (categoryId: string) => {
      return state.products.filter(product => product.categoryId === categoryId)
    }
  },

  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null
      try {
        const response = await $fetch<Product[]>('/api/products')
        this.products = response
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch products'
      } finally {
        this.loading = false
      }
    },

    async createProduct(product: Omit<Product, 'id'>) {
      this.loading = true
      this.error = null
      try {
        const response = await $fetch<Product>('/api/products', {
          method: 'POST',
          body: product
        })
        this.products.push(response)
        return response
      } catch (error: any) {
        this.error = error.message || 'Failed to create product'
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateProduct(id: string, product: Partial<Product>) {
      this.loading = true
      this.error = null
      try {
        const response = await $fetch<Product>(`/api/products/${id}`, {
          method: 'PUT',
          body: product
        })
        const index = this.products.findIndex(p => p.id === id)
        if (index !== -1) {
          this.products[index] = response
        }
        return response
      } catch (error: any) {
        this.error = error.message || 'Failed to update product'
        throw error
      } finally {
        this.loading = false
      }
    },

    async deleteProduct(id: string) {
      this.loading = true
      this.error = null
      try {
        await $fetch(`/api/products/${id}`, {
          method: 'DELETE'
        })
        this.products = this.products.filter(p => p.id !== id)
      } catch (error: any) {
        this.error = error.message || 'Failed to delete product'
        throw error
      } finally {
        this.loading = false
      }
    }
  }
}) 