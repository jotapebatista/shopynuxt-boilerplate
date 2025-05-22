<template>
  <div class="bg-surface rounded-lg p-4 shadow-sm">
    <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">{{ title }}</h3>
    <div class="relative" :style="{ height: `${height}px` }">
      <canvas ref="chartRef"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { Chart } from 'chart.js/auto'
import type { ChartConfiguration } from 'chart.js'

const props = defineProps<{
  title: string
  height?: number
  config: ChartConfiguration
}>()

const chartRef = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null

const isDarkMode = ref(false)

const updateChartTheme = () => {
  if (!chart) return

  const isDark = document.documentElement.classList.contains('dark')
  const textColor = isDark ? '#e5e7eb' : '#374151'
  const gridColor = isDark ? '#374151' : '#e5e7eb'

  const newOptions = {
    ...chart.options,
    scales: {
      ...chart.options.scales,
      x: {
        ...chart.options.scales?.x,
        grid: {
          color: gridColor
        },
        ticks: {
          color: textColor
        }
      },
      y: {
        ...chart.options.scales?.y,
        grid: {
          color: gridColor
        },
        ticks: {
          color: textColor
        }
      }
    },
    plugins: {
      ...chart.options.plugins,
      legend: {
        ...chart.options.plugins?.legend,
        labels: {
          color: textColor
        }
      }
    }
  }

  chart.options = newOptions
  chart.update()
}

onMounted(() => {
  if (!chartRef.value) return

  const ctx = chartRef.value.getContext('2d')
  if (!ctx) return

  chart = new Chart(ctx, props.config)
  updateChartTheme()

  // Watch for dark mode changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        updateChartTheme()
      }
    })
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})

onUnmounted(() => {
  if (chart) {
    chart.destroy()
    chart = null
  }
})

watch(() => props.config, (newConfig) => {
  if (chart) {
    chart.data = newConfig.data
    chart.options = newConfig.options
    chart.update()
  }
}, { deep: true })
</script> 