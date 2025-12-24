<template>
  <div class="card custom-card">
    <div class="card-header justify-content-between">
      <div class="card-title">Karyawan Berdasarkan Kota</div>
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
import { LineChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import { LegacyGridContainLabel } from 'echarts/features'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LegacyGridContainLabel,
])

const option = ref({
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['day'],
    top: 0,
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true,
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'day',
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      smooth: true,
    },
  ],
})
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
