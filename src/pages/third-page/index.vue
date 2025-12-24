<template>
  <div>
    <h1>Third Page</h1>
    <p>This is the third page of the application.</p>
  </div>
</template>

<script setup>
definePage({
  name: 'third-page',
  meta: {
    label: 'Third Page',
    action: 'read',
    subject: 'Third Page',
  },
})
</script>

<style lang="scss" scoped></style>
