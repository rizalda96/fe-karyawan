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
import { TitleComponent, TooltipComponent, LegendComponent, DatasetComponent } from 'echarts/components'
import VChart from 'vue-echarts'

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent, DatasetComponent])

const $app = inject('app')
const $http = inject('http')
// '{a} <br/>{b} : {c} ({d}%)'
const seriesPie = ref([])
const option = reactive({
  tooltip: {
    trigger: 'item',
    formatter: (data) => {
      return `${data.seriesName} <br/>${data.name} : ${data.value.total} (${data.percent}%)`
    },
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  dataset: {
    dimensions: ['jenis_kelamin', 'total'],
    source: seriesPie,
  },
  series: [
    {
      name: 'Jenis Kelamin',
      type: 'pie',
      radius: '55%',
      center: ['50%', '40%'],
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

onMounted(() => {
  fetchData()
})

const loading = ref(false)
const fetchData = async () => {
  loading.value = true
  try {
    const { data } = await $http.get(`${$app.api_url}dashboard/by-gender`)
    seriesPie.value = data
    
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
