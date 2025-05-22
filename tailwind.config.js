/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
        'secondary-dark': 'var(--color-secondary-dark)',
        accent: 'var(--color-accent)',
        'accent-dark': 'var(--color-accent-dark)',
      },
      fontFamily: {
        sans: ['var(--font-family)'],
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      spacing: {
        DEFAULT: 'var(--spacing)',
      },
    },
  },
  plugins: [],
}