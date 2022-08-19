<script setup>
  import NavBar from "@/components/NavBar.vue"
</script>

<template>
  <div>
    <NavBar class="fixed top-0 left-0 w-full z-[9999]" />
    <router-view></router-view>
  </div>
</template>
