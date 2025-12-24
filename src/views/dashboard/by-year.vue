<template>
  <div class="card custom-card">
    <div class="card-header justify-content-between">
      <div class="card-title">Karyawan Berdasarkan Tahun Lahir</div>
    </div>
    <div class="card-body">
      <div class="content-wrapper">
        <v-chart class="chart" :option="option" autoresize />
      </div>
    </div>
  </div>
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components'
import VChart from 'vue-echarts'

use([CanvasRenderer, BarChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent])

const option = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {
    top: 'top',
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220],
    },
  ],
})
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
