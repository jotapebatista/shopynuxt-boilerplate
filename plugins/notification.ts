import { defineNuxtPlugin } from '#app'
import { useNotification } from '~/composables/useNotification'

export default defineNuxtPlugin((nuxtApp) => {
  const { notification, show, hide } = useNotification()

  // Provide the notification system globally
  nuxtApp.provide('notification', {
    show,
    hide,
    notification
  })
}) 