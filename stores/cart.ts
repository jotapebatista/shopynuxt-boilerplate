import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  quantity: number
  image: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
    isInitialized: false,
    isOpen: false
  }),

  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    totalAmount: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  },

  actions: {
    async initialize() {
      if (this.isInitialized) return
      
      const authStore = useAuthStore()
      if (!authStore.isAuthenticated) {
        this.items = []
        this.isInitialized = true
        return
      }

      try {
        const response = await fetch('/api/cart', {
          headers: {
            'Authorization': `Bearer ${authStore.token}`
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch cart')
        }

        const cart = await response.json()
        this.items = cart.items.map((item: any) => ({
          id: item.id,
          productId: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          image: item.product.images[0]
        }))
      } catch (error) {
        console.error('Error initializing cart:', error)
        this.items = []
      }

      this.isInitialized = true
    },

    toggleCart() {
      this.isOpen = !this.isOpen
    },

    async addItem(product: { id: string; name: string; price: number; images: string[] }) {
      const authStore = useAuthStore()
	  console.log(authStore)
	  console.log(authStore.isAuthenticated)
      if (!authStore.isAuthenticated) {
        throw new Error('User must be authenticated to add items to cart')
      }

      try {
        const response = await fetch('/api/cart/items', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${authStore.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            productId: product.id,
            quantity: 1
          })
        })

        if (!response.ok) {
          throw new Error('Failed to add item to cart')
        }

        const cartItem = await response.json()
        const existingItem = this.items.find(item => item.productId === product.id)
        
        if (existingItem) {
          existingItem.quantity++
        } else {
          this.items.push({
            id: cartItem.id,
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.images[0]
          })
        }
      } catch (error) {
        console.error('Error adding item to cart:', error)
        throw error
      }
    },

    async removeItem(itemId: string) {
      const authStore = useAuthStore()
      if (!authStore.isAuthenticated) {
        throw new Error('User must be authenticated to remove items from cart')
      }

      try {
        const response = await fetch(`/api/cart/items/${itemId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${authStore.token}`
          }
        })

        if (!response.ok) {
          throw new Error('Failed to remove item from cart')
        }

        const index = this.items.findIndex(item => item.id === itemId)
        if (index > -1) {
          this.items.splice(index, 1)
        }
      } catch (error) {
        console.error('Error removing item from cart:', error)
        throw error
      }
    },

    async updateQuantity(itemId: string, quantity: number) {
      const authStore = useAuthStore()
      if (!authStore.isAuthenticated) {
        throw new Error('User must be authenticated to update cart')
      }

      if (quantity < 1) {
        await this.removeItem(itemId)
        return
      }

      try {
        const response = await fetch(`/api/cart/items/${itemId}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${authStore.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ quantity })
        })

        if (!response.ok) {
          throw new Error('Failed to update cart item quantity')
        }

        const item = this.items.find(item => item.id === itemId)
        if (item) {
          item.quantity = quantity
        }
      } catch (error) {
        console.error('Error updating cart item quantity:', error)
        throw error
      }
    },

    async clearCart() {
      const authStore = useAuthStore()
      if (!authStore.isAuthenticated) {
        throw new Error('User must be authenticated to clear cart')
      }

      try {
        // Remove all items one by one
        await Promise.all(this.items.map(item => this.removeItem(item.id)))
        this.items = []
      } catch (error) {
        console.error('Error clearing cart:', error)
        throw error
      }
    },

    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    },

    loadCart() {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        this.items = JSON.parse(savedCart)
      }
      this.isInitialized = true
    }
  }
}) 