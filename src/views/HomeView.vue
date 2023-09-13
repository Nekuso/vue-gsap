<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'
import { Application } from '@splinetool/runtime'

onMounted(() => {
  const canvas = document.getElementById('canvas3d')
  const app = new Application(canvas)
  app.load('https://prod.spline.design/sJO5mgflCrP2Mhjo/scene.splinecode')
})
</script>

<template>
  <main class="w-full h-screen flex flex-col justify-center place-items-center">
    <canvas class="w-full h-screen" id="content"></canvas>
  </main>
</template>
