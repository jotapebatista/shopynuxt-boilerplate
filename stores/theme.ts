import { defineStore } from 'pinia'

interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  surface: string
  border: string
}

interface ThemeSettings {
  colors: ThemeColors
  fontFamily: string
  borderRadius: string
  spacing: string
}

const defaultLightTheme: ThemeSettings = {
  colors: {
    primary: '#3B82F6', // blue-500
    secondary: '#6B7280', // gray-500
    accent: '#8B5CF6', // violet-500
    background: '#FFFFFF',
    text: '#1F2937', // gray-800
    surface: '#FFFFFF',
    border: '#E5E7EB', // gray-200
  },
  fontFamily: 'Inter',
  borderRadius: '0.375rem', // rounded-md
  spacing: '1rem',
}

const defaultDarkTheme: ThemeSettings = {
  colors: {
    primary: '#60A5FA', // blue-400
    secondary: '#9CA3AF', // gray-400
    accent: '#A78BFA', // violet-400
    background: '#111827', // gray-900
    text: '#F9FAFB', // gray-50
    surface: '#1F2937', // gray-800
    border: '#374151', // gray-700
  },
  fontFamily: 'Inter',
  borderRadius: '0.375rem',
  spacing: '1rem',
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    settings: defaultLightTheme,
    isDarkMode: false,
  }),

  getters: {
    currentTheme: (state) => state.settings,
    cssVariables: (state) => ({
      '--color-primary': state.settings.colors.primary,
      '--color-secondary': state.settings.colors.secondary,
      '--color-accent': state.settings.colors.accent,
      '--color-background': state.settings.colors.background,
      '--color-text': state.settings.colors.text,
      '--color-surface': state.settings.colors.surface,
      '--color-border': state.settings.colors.border,
      '--font-family': state.settings.fontFamily,
      '--border-radius': state.settings.borderRadius,
      '--spacing': state.settings.spacing,
    }),
  },

  actions: {
    updateTheme(settings: Partial<ThemeSettings>) {
      this.settings = {
        ...this.settings,
        ...settings,
        colors: {
          ...this.settings.colors,
          ...(settings.colors || {}),
        },
      }
      this.saveTheme()
    },

    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      this.settings = this.isDarkMode ? defaultDarkTheme : defaultLightTheme
      this.saveTheme()
    },

    loadTheme() {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        const { settings, isDarkMode } = JSON.parse(savedTheme)
        this.settings = settings
        this.isDarkMode = isDarkMode
      }
    },

    saveTheme() {
      localStorage.setItem('theme', JSON.stringify({
        settings: this.settings,
        isDarkMode: this.isDarkMode,
      }))
    },

    resetTheme() {
      this.settings = defaultLightTheme
      this.isDarkMode = false
      this.saveTheme()
    },
  },
}) 