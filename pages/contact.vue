<template>
  <div class="bg-background">
    <!-- Hero Section -->
    <div class="relative bg-primary py-16">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90"></div>
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p class="text-xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
            We'd love to hear from you. Our team is always ready to help with any questions or concerns.
          </p>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send us a Message</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    v-model="form.firstName"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-background text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    v-model="form.lastName"
                    class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-background text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-background text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  v-model="form.subject"
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-background text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                  placeholder="How can we help?"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea 
                  v-model="form.message"
                  rows="4" 
                  class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-background text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" 
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                class="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                :disabled="isSubmitting"
              >
                <svg v-if="isSubmitting" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Info & Map -->
          <div class="space-y-8">
            <!-- Office Locations -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Our Offices</h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Headquarters</h3>
                    <p class="text-gray-600 dark:text-gray-400">123 E-commerce St, Digital City</p>
                    <p class="text-gray-600 dark:text-gray-400">United States</p>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">European Office</h3>
                    <p class="text-gray-600 dark:text-gray-400">45 Tech Avenue, Innovation Hub</p>
                    <p class="text-gray-600 dark:text-gray-400">London, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Methods -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact Methods</h2>
              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Email</h3>
                    <a href="mailto:support@shopynuxt.com" class="text-primary hover:text-primary-dark transition-colors">support@shopynuxt.com</a>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Phone</h3>
                    <a href="tel:+15551234567" class="text-primary hover:text-primary-dark transition-colors">+1 (555) 123-4567</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564750986!5m2!1sen!2s" 
                width="100%" 
                height="300" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy"
                class="w-full h-[300px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNuxtApp } from '#app'

const { $notification } = useNuxtApp()

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    // Here you would typically send the form data to your backend
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
    
    $notification.show({
      type: 'success',
      title: 'Success',
      message: 'Your message has been sent successfully!',
      timeout: 5000
    })
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }
  } catch (error: any) {
    $notification.show({
      type: 'error',
      title: 'Error',
      message: error.message || 'Failed to send message. Please try again.',
      timeout: 5000
    })
  } finally {
    isSubmitting.value = false
  }
}
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

.bg-primary {
  background-color: var(--color-primary);
}

.bg-primary-dark {
  filter: brightness(0.9);
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 