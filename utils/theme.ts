import { useThemeStore } from '@/stores/theme'

export const useTheme = () => {
  const themeStore = useThemeStore()

  const getThemeClass = (type: 'primary' | 'secondary' | 'accent', variant: 'bg' | 'text' | 'border' = 'bg') => {
    return `${variant}-${type}`
  }

  const getThemeColor = (type: 'primary' | 'secondary' | 'accent') => {
    return themeStore.settings.colors[type]
  }

  const getThemeStyle = (type: 'primary' | 'secondary' | 'accent', variant: 'bg' | 'text' | 'border' = 'bg') => {
    return {
      [variant === 'bg' ? 'backgroundColor' : variant === 'text' ? 'color' : 'borderColor']: getThemeColor(type)
    }
  }

  const toggleDarkMode = () => {
    themeStore.toggleDarkMode()
  }

  return {
    getThemeClass,
    getThemeColor,
    getThemeStyle,
    isDarkMode: themeStore.isDarkMode,
    colors: themeStore.settings.colors,
    toggleDarkMode
  }
} 