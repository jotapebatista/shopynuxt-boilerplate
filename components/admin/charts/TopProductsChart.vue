<template>
  <BaseChart
    title="Top Selling Products"
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
    name: string
    quantity: number
  }>
}>()

const chartConfig = computed<ChartConfiguration>(() => ({
  type: 'bar',
  data: {
    labels: props.data.map(item => item.name),
    datasets: [{
      label: 'Units Sold',
      data: props.data.map(item => item.quantity),
      backgroundColor: '#3b82f6',
      borderRadius: 4
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  }
}))
</script> 