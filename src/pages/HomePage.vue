<template>
  <Splide :options="options">
    <SplideSlide>
      <SingleSlider />
    </SplideSlide>
    <SplideSlide>
      <Slider1 />
    </SplideSlide>
    <SplideSlide>
      <Slider2 />
    </SplideSlide>
  </Splide>
</template>

<script setup>
  import { reactive } from "vue"

  import "@splidejs/vue-splide/css"

  import SingleSlider from "@/components/SingleSlider.vue"
  import Slider1 from "@/components/Slider1.vue"
  import Slider2 from "@/components/Slider2.vue"

  const options = reactive({
    direction: "ttb",
    wheel: true,
    wheelMinThreshold: 70,
    wheelSleep: 500,
    height: "100vh",
    arrows: false,
    waitForTransition: true,
  })
</script>

<style></style>
