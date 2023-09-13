<script setup lang="ts">
import gsap from 'gsap'
import { ref, onMounted } from 'vue'
import { Application } from '@splinetool/runtime'

const canvas = ref<any>(null)

onMounted(() => {
  const app = new Application(canvas.value)
  app.load('https://prod.spline.design/sJO5mgflCrP2Mhjo/scene.splinecode')
})
</script>

<template>
  <main class="w-full h-screen flex flex-col justify-center place-items-center">
    <canvas ref="canvas"></canvas>
  </main>
</template>
