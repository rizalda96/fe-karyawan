<template>
  <div class="card custom-card">
    <div class="card-header justify-content-between">
      <div class="card-title">Karyawan Berdasarkan Jenis Kelamin</div>
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
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components'
import VChart from 'vue-echarts'
import { ref, provide } from 'vue'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

const option = ref({
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '40%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
})
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
