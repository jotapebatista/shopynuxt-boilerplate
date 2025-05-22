import { defineStore } from 'pinia'
import { useAuthStore } from './auth'

interface WishlistItem {
  id: string
  productId: string
  name: string
  price: number
  image: string
}

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [] as WishlistItem[],
    isInitialized: false
  }),

  getters: {
    totalItems: (state) => state.items.length,
    isInWishlist: (state) => (productId: string) => 
      state.items.some(item => item.productId === productId)
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
        const response = await fetch('/api/wishlist', {
          headers: {
            'Authorization': `Bearer ${authStore.token}`
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch wishlist')
        }

        const wishlist = await response.json()
        this.items = wishlist.items.map((item: any) => ({
          id: item.id,
          productId: item.product.id,
          name: item.product.name,
          price: item.product.price,
          image: item.product.images[0]
        }))
      } catch (error) {
        console.error('Error initializing wishlist:', error)
        this.items = []
      }

      this.isInitialized = true
    },

    async addItem(product: { id: string; name: string; price: number; images: string[] }) {
      const authStore = useAuthStore()
      if (!authStore.isAuthenticated) {
        throw new Error('User must be authenticated to add items to wishlist')
      }

      try {
        const response = await fetch('/api/wishlist/items', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${authStore.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            productId: product.id
          })
        })

        if (!response.ok) {
          throw new Error('Failed to add item to wishlist')
        }

        const wishlistItem = await response.json()
        this.items.push({
          id: wishlistItem.id,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0]
        })
      } catch (error) {
        console.error('Error adding item to wishlist:', error)
        throw error
      }
    },

    async removeItem(itemId: string) {
      const authStore = useAuthStore()
      if (!authStore.isAuthenticated) {
        throw new Error('User must be authenticated to remove items from wishlist')
      }

      try {
        const response = await fetch(`/api/wishlist/items/${itemId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${authStore.token}`
          }
        })

        if (!response.ok) {
          throw new Error('Failed to remove item from wishlist')
        }

        const index = this.items.findIndex(item => item.id === itemId)
        if (index > -1) {
          this.items.splice(index, 1)
        }
      } catch (error) {
        console.error('Error removing item from wishlist:', error)
        throw error
      }
    }
  }
}) 