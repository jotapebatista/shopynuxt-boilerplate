import { useNotification } from '~/composables/useNotification'
import type { Ref } from 'vue'

declare module '#app' {
  interface NuxtApp {
    $notification: {
      show: (notification: { type: 'error' | 'success' | 'info' | 'warning', title: string, message: string, timeout?: number }) => void
      hide: () => void
      notification: Ref<{ type: 'error' | 'success' | 'info' | 'warning', title: string, message: string } | null>
    }
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $notification: {
      show: (notification: { type: 'error' | 'success' | 'info' | 'warning', title: string, message: string, timeout?: number }) => void
      hide: () => void
      notification: Ref<{ type: 'error' | 'success' | 'info' | 'warning', title: string, message: string } | null>
    }
  }
} 