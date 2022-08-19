<template>
  <div>
    <button @click="count++">Press me {{ count }}</button>
  </div>
</template>

<script setup>
  import { ref } from "vue"

  const count = ref(0)
</script>

<!-- composition api -->
<!-- setup -->

<!-- option api -->
<!--  -->

<style lang="scss" scoped></style>
