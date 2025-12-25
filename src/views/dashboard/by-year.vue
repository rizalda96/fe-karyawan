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
  DatasetComponent,
} from 'echarts/components'
import VChart from 'vue-echarts'

use([CanvasRenderer, BarChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent, DatasetComponent])

const $app = inject('app')
const $http = inject('http')
const seriesData = ref([])

const option = reactive({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  // legend: {
  //   top: 'top',
  // },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  dataset: {
    source: seriesData,
    dimensions: ['year', 'total'],
  },
  xAxis: [
    {
      type: 'category',
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
      name: 'year',
      type: 'bar',
      barWidth: '50%',
    },
  ],
})

onMounted(() => {
  fetchData()
})

const loading = ref(false)
const fetchData = async () => {
  loading.value = true
  try {
    const { data } = await $http.get(`${$app.api_url}dashboard/by-year-date`)
    seriesData.value = data
    
  } catch (error) {
    loading.value = false
    $app.errorAlert(error)
  }
}
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
