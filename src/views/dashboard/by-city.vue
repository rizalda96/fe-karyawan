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
import { TitleComponent, TooltipComponent, LegendComponent, DatasetComponent } from 'echarts/components'
import { LegacyGridContainLabel } from 'echarts/features'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LegacyGridContainLabel,
  DatasetComponent,
])

const $app = inject('app')
const $http = inject('http')
const seriesData = ref([])
const option = reactive({
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    top: 0,
  },
  xAxis: {
    type: 'category',
  },
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true,
  },
  dataset: {
    source: seriesData,
    dimensions: ['kota', 'total'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      // name: 'day',
      type: 'line',
      smooth: true,
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
    const { data } = await $http.get(`${$app.api_url}dashboard/by-city`)
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
