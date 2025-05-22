<template>
  <div class="bg-background">
    <!-- Hero Section -->
    <div class="relative bg-primary py-24">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90"></div>
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in">
            About Shopynuxt
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
            We're on a mission to revolutionize online shopping with cutting-edge technology and exceptional customer service.
          </p>
        </div>
      </div>
    </div>

    <!-- Company Values -->
    <div class="py-24 bg-surface">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Values</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">What drives us every day</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Innovation</h3>
            <p class="text-gray-600 dark:text-gray-400">Constantly pushing boundaries to deliver the best shopping experience.</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Customer First</h3>
            <p class="text-gray-600 dark:text-gray-400">Your satisfaction is our top priority. We're here to serve you better.</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Quality</h3>
            <p class="text-gray-600 dark:text-gray-400">We never compromise on the quality of our products and services.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-primary py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl font-bold text-white mb-2">10K+</div>
            <div class="text-gray-200">Happy Customers</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-white mb-2">50K+</div>
            <div class="text-gray-200">Products Sold</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-white mb-2">24/7</div>
            <div class="text-gray-200">Customer Support</div>
          </div>
          <div>
            <div class="text-4xl font-bold text-white mb-2">98%</div>
            <div class="text-gray-200">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="py-24 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Meet Our Team</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">The passionate people behind Shopynuxt</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team member" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">John Smith</h3>
              <p class="text-primary mb-4">CEO & Founder</p>
              <p class="text-gray-600 dark:text-gray-400">Visionary leader with 15+ years of e-commerce experience.</p>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team member" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Sarah Johnson</h3>
              <p class="text-primary mb-4">Head of Operations</p>
              <p class="text-gray-600 dark:text-gray-400">Expert in logistics and customer experience.</p>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Team member" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Michael Chen</h3>
              <p class="text-primary mb-4">Tech Lead</p>
              <p class="text-gray-600 dark:text-gray-400">Full-stack developer passionate about creating amazing user experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-primary py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Ready to Start Shopping?</h2>
        <p class="text-xl text-gray-200 mb-8">Join thousands of satisfied customers today</p>
        <NuxtLink 
          to="/products" 
          class="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors"
        >
          Explore Products
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

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