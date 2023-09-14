<script setup lang="ts">
import gsap from 'gsap'
import { ref, onMounted } from 'vue'
import { Application } from '@splinetool/runtime'

const canvas = ref<HTMLCanvasElement | any>(null)

onMounted(() => {
  const app = new Application(canvas.value)

  app.load('https://prod.spline.design/sJO5mgflCrP2Mhjo/scene.splinecode').then(() => {
    app.setZoom(0.8)
  })
})
</script>

<template>
  <main class="w-full h-screen flex flex-col justify-center place-items-center">
    <div class="w-full h-full px-24 flex gap-7 justify-center place-items-center">
      <div class="w-2/5 h-full py-60 flex gap-4 flex-col justify-between">
        <div class="flex flex-col gap-4">
          <h1 class="text-7xl font-black">Behold, the useless keyboard of the year</h1>
          <h2 class="text-3xl font-medium text-slate-700">
            Made with spline and a hint of gsap. This is a useless project!
          </h2>
        </div>
        <h3 class="text-slate-700">Press 1, 2, 0 or Enter to interact</h3>
      </div>
      <div class="w-2/4 h-full flex justify-center place-items-center">
        <canvas ref="canvas"></canvas>
      </div>
    </div>
  </main>
</template>
