import { ref } from 'vue'

interface Notification {
  type: 'error' | 'success' | 'info' | 'warning'
  title: string
  message: string
  timeout?: number
}

export const useNotification = () => {
  const notification = ref<Notification | null>(null)
  let timeoutId: NodeJS.Timeout | null = null

  const show = (notificationData: Notification) => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Set the notification
    notification.value = notificationData

    // Auto-hide after timeout if specified
    if (notificationData.timeout !== undefined) {
      timeoutId = setTimeout(() => {
        hide()
      }, notificationData.timeout)
    }
  }

  const hide = () => {
    notification.value = null
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  return {
    notification,
    show,
    hide
  }
} 