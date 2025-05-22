<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
            <nav class="space-y-1">
              <NuxtLink
                to="/account/profile"
                class="group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === '/account/profile'
                    ? 'bg-gray-50 text-indigo-700 hover:bg-gray-50 hover:text-indigo-700'
                    : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'
                ]"
              >
                <svg
                  class="flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  :class="[
                    $route.path === '/account/profile'
                      ? 'text-indigo-500'
                      : 'text-gray-400 group-hover:text-gray-500'
                  ]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profile
              </NuxtLink>

              <NuxtLink
                to="/account/orders"
                class="group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === '/account/orders'
                    ? 'bg-gray-50 text-indigo-700 hover:bg-gray-50 hover:text-indigo-700'
                    : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'
                ]"
              >
                <svg
                  class="flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  :class="[
                    $route.path === '/account/orders'
                      ? 'text-indigo-500'
                      : 'text-gray-400 group-hover:text-gray-500'
                  ]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Orders
              </NuxtLink>

              <NuxtLink
                to="/account/addresses"
                class="group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === '/account/addresses'
                    ? 'bg-gray-50 text-indigo-700 hover:bg-gray-50 hover:text-indigo-700'
                    : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'
                ]"
              >
                <svg
                  class="flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  :class="[
                    $route.path === '/account/addresses'
                      ? 'text-indigo-500'
                      : 'text-gray-400 group-hover:text-gray-500'
                  ]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Addresses
              </NuxtLink>

              <NuxtLink
                to="/account/wishlist"
                class="group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                :class="[
                  $route.path === '/account/wishlist'
                    ? 'bg-gray-50 text-indigo-700 hover:bg-gray-50 hover:text-indigo-700'
                    : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'
                ]"
              >
                <svg
                  class="flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  :class="[
                    $route.path === '/account/wishlist'
                      ? 'text-indigo-500'
                      : 'text-gray-400 group-hover:text-gray-500'
                  ]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Wishlist
              </NuxtLink>
            </nav>
          </aside>

          <main class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <slot />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'account'
})
</script> 