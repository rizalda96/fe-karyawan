<template>
  <div>
    <h1>dashboard Page</h1>
    <p>This is the dashboard page of the application.</p>
  </div>
</template>

<script setup>
definePage({
  name: 'home',
  meta: {
    label: 'Dashboard',
    action: 'read',
    subject: 'Dashboard',
  },
})
</script>

<style scoped>
/* Add your styles here */
</style>
