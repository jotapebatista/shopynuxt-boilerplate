<template>
  <BaseChart
    title="Orders by Status"
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
    status: string
    count: number
  }>
}>()

const statusColors = {
  PENDING: '#f59e0b',
  PROCESSING: '#3b82f6',
  SHIPPED: '#8b5cf6',
  DELIVERED: '#10b981',
  CANCELLED: '#ef4444'
}

const chartConfig = computed<ChartConfiguration>(() => ({
  type: 'doughnut',
  data: {
    labels: props.data.map(item => item.status),
    datasets: [{
      data: props.data.map(item => item.count),
      backgroundColor: props.data.map(item => statusColors[item.status as keyof typeof statusColors] || '#6b7280'),
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right'
      }
    },
    cutout: '70%'
  }
}))
</script> 