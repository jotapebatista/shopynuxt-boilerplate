<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background">
    <h1 class="text-2xl font-bold mb-6 text-primary">Theme Settings</h1>

    <!-- Theme Preview -->
    <div class="bg-surface rounded-lg shadow p-6 mb-6 transition-colors">
      <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Preview</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <button class="btn-primary w-full">Primary Button</button>
          <button class="btn-secondary w-full">Secondary Button</button>
          <button class="btn-accent w-full">Accent Button</button>
        </div>
        <div class="space-y-4">
          <div class="p-4 rounded border border-border transition-colors">
            <h3 class="font-medium mb-2 text-gray-900 dark:text-gray-100">Card Title</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">This is a sample card to preview the theme.</p>
          </div>
          <div class="flex gap-2">
            <span class="px-2 py-1 rounded bg-primary text-white text-sm">Primary</span>
            <span class="px-2 py-1 rounded bg-secondary text-white text-sm">Secondary</span>
            <span class="px-2 py-1 rounded bg-accent text-white text-sm">Accent</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Color Settings -->
    <div class="bg-surface rounded-lg shadow p-6 mb-6 transition-colors">
      <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Colors</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Primary Color</label>
            <div class="flex gap-2">
              <input 
                type="color" 
                v-model="localTheme.colors.primary"
                class="w-12 h-12 rounded cursor-pointer"
              />
              <input 
                type="text" 
                v-model="localTheme.colors.primary"
                class="flex-1 border border-border rounded px-3 py-2 bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="#000000"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Secondary Color</label>
            <div class="flex gap-2">
              <input 
                type="color" 
                v-model="localTheme.colors.secondary"
                class="w-12 h-12 rounded cursor-pointer"
              />
              <input 
                type="text" 
                v-model="localTheme.colors.secondary"
                class="flex-1 border border-border rounded px-3 py-2 bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="#000000"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Accent Color</label>
            <div class="flex gap-2">
              <input 
                type="color" 
                v-model="localTheme.colors.accent"
                class="w-12 h-12 rounded cursor-pointer"
              />
              <input 
                type="text" 
                v-model="localTheme.colors.accent"
                class="flex-1 border border-border rounded px-3 py-2 bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="#000000"
              />
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Background Color</label>
            <div class="flex gap-2">
              <input 
                type="color" 
                v-model="localTheme.colors.background"
                class="w-12 h-12 rounded cursor-pointer"
              />
              <input 
                type="text" 
                v-model="localTheme.colors.background"
                class="flex-1 border border-border rounded px-3 py-2 bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="#000000"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Text Color</label>
            <div class="flex gap-2">
              <input 
                type="color" 
                v-model="localTheme.colors.text"
                class="w-12 h-12 rounded cursor-pointer"
              />
              <input 
                type="text" 
                v-model="localTheme.colors.text"
                class="flex-1 border border-border rounded px-3 py-2 bg-background text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="#000000"
              />
            </div>
          </div>
          <div class="flex items-center gap-2">
            <input 
              type="checkbox" 
              :checked="isDarkMode"
              @change="toggleDarkMode"
              class="rounded border-border bg-background text-primary focus:ring-primary"
            />
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Preset Themes -->
    <div class="bg-surface rounded-lg shadow p-6 mb-6 transition-colors">
      <h2 class="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Preset Themes</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button 
          v-for="(theme, name) in presetThemes" 
          :key="name"
          @click="applyPresetTheme(theme)"
          class="p-4 border border-border rounded hover:border-primary transition-colors bg-background"
        >
          <div class="flex gap-2 mb-2">
            <div class="w-6 h-6 rounded" :style="{ backgroundColor: theme.colors.primary }"></div>
            <div class="w-6 h-6 rounded" :style="{ backgroundColor: theme.colors.secondary }"></div>
            <div class="w-6 h-6 rounded" :style="{ backgroundColor: theme.colors.accent }"></div>
          </div>
          <p class="font-medium text-gray-900 dark:text-gray-100">{{ name }}</p>
        </button>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex justify-end gap-4">
      <button 
        @click="resetTheme"
        class="px-4 py-2 border border-border rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
      >
        Reset to Default
      </button>
      <button 
        @click="saveTheme"
        class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
      >
        Save Changes
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin'
})

import { ref, onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
const localTheme = ref({ ...themeStore.settings })
const isDarkMode = ref(themeStore.isDarkMode)

const presetThemes = {
  'Ocean': {
    colors: {
      primary: '#0EA5E9', // sky-500
      secondary: '#64748B', // slate-500
      accent: '#06B6D4', // cyan-500
      background: '#FFFFFF',
      text: '#0F172A', // slate-900
    },
    fontFamily: 'Inter',
    borderRadius: '0.375rem',
    spacing: '1rem',
  },
  'Forest': {
    colors: {
      primary: '#22C55E', // green-500
      secondary: '#6B7280', // gray-500
      accent: '#10B981', // emerald-500
      background: '#FFFFFF',
      text: '#1F2937', // gray-800
    },
    fontFamily: 'Inter',
    borderRadius: '0.375rem',
    spacing: '1rem',
  },
  'Sunset': {
    colors: {
      primary: '#F97316', // orange-500
      secondary: '#6B7280', // gray-500
      accent: '#EC4899', // pink-500
      background: '#FFFFFF',
      text: '#1F2937', // gray-800
    },
    fontFamily: 'Inter',
    borderRadius: '0.375rem',
    spacing: '1rem',
  },
}

const applyPresetTheme = (theme: any) => {
  localTheme.value = { ...theme }
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  themeStore.toggleDarkMode()
}

const saveTheme = () => {
  themeStore.updateTheme(localTheme.value)
}

const resetTheme = () => {
  themeStore.resetTheme()
  localTheme.value = { ...themeStore.settings }
  isDarkMode.value = themeStore.isDarkMode
}

onMounted(() => {
  themeStore.loadTheme()
  localTheme.value = { ...themeStore.settings }
  isDarkMode.value = themeStore.isDarkMode
})
</script>

<style scoped>
.bg-background {
  background-color: var(--color-background);
}

.bg-surface {
  background-color: var(--color-surface);
}

.bg-primary {
  background-color: var(--color-primary);
}

.text-primary {
  color: var(--color-primary);
}

.border-border {
  border-color: var(--color-border);
}

.hover\:bg-primary-dark:hover {
  filter: brightness(0.9);
}

.btn-primary {
  @apply bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors;
}

.btn-secondary {
  @apply bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-colors;
}

.btn-accent {
  @apply bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark transition-colors;
}
</style> 