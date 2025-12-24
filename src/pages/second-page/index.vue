<template>
  <div>
    <h1>Second Page</h1>
    <p>This is the second page of the application.</p>
  </div>
</template>

<script setup>
definePage({
  name: 'second-page',
  meta: {
    label: 'Second Page',
    action: 'read',
    subject: 'Second Page',
  },
})
</script>

<style lang="scss" scoped></style>
