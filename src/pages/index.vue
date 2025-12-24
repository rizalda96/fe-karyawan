<template>
  <Pageheader :propData="dataToPass" />
  <div class="row">
    <div class="col-12 col-lg-6">
      <ByGender />
    </div>
    <div class="col-12 col-lg-6">
      <ByYear />
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-lg-6">
      <ByCity />
    </div>
  </div>
</template>

<script setup>
import Pageheader from '@/components/shared/pageheader/pageheader.vue'
import ByCity from '@/views/dashboard/by-city.vue'
import ByGender from '@/views/dashboard/by-gender.vue'
import ByYear from '@/views/dashboard/by-year.vue'

definePage({
  name: 'home',
  meta: {
    label: 'Dashboard',
    action: 'read',
    subject: 'Dashboard',
  },
})

const dataToPass = {
  title: 'Dashboard',
  currentpage: 'Charts',
  activepage: 'Dashboard',
}
</script>

<style scoped>
/* Add your styles here */
</style>
