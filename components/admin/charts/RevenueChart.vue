<template>
  <BaseChart
    title="Revenue (Last 6 Months)"
    :height="300"
    :config="chartConfig"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ChartConfiguration } from 'chart.js'
import BaseChart from './BaseChart.vue'

const props = defineProps<{
  data: Array<{
    month: string
    revenue: number
  }>
}>()

const chartConfig = computed<ChartConfiguration>(() => ({
  type: 'line',
  data: {
    labels: props.data.map(item => {
      const [year, month] = item.month.split('-')
      return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    }),
    datasets: [{
      label: 'Revenue',
      data: props.data.map(item => item.revenue),
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.parsed.y.toFixed(2)}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`
        }
      }
    }
  }
}))
</script> 