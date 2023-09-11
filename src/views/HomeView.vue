<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

onMounted(() => {
  tl.to('.marquee__part', {
    xPercent: -100,
    duration: 10,
    repeat: -1,
    ease: 'linear'
  })
})

const tl = gsap.timeline()
</script>

<template>
  <main class="w-full flex flex-col justify-center place-items-center">
    <div class="spacer w-full h-screen bg-slate-800"></div>
    <div class="content w-full h-screen bg-slate-700 flex justify-center place-items-center">
      <div class="marquee w-full flex shrink-0 bg-white py-8 overflow-hidden gap-x-16">
        <div class="marquee__part flex place-items-center w-fit shrink-0">
          <h1 class="text-8xl font-black">I'M MOVING SHEEESH</h1>
          <span class="text-7xl font-black">⬅️</span>
        </div>
        <div class="marquee__part flex place-items-center w-fit shrink-0">
          <h1 class="text-8xl font-black">I'M MOVING SHEEESH</h1>
          <span class="text-7xl font-black">⬅️</span>
        </div>
        <div class="marquee__part flex place-items-center w-fit shrink-0">
          <h1 class="text-8xl font-black">I'M MOVING SHEEESH</h1>
          <span class="text-7xl font-black">⬅️</span>
        </div>
        <div class="marquee__part flex place-items-center w-fit shrink-0">
          <h1 class="text-8xl font-black">I'M MOVING SHEEESH</h1>
          <span class="text-7xl font-black">⬅️</span>
        </div>
        <div class="marquee__part flex place-items-center w-fit shrink-0">
          <h1 class="text-8xl font-black">I'M MOVING SHEEESH</h1>
          <span class="text-7xl font-black">⬅️</span>
        </div>
        <div class="marquee__part flex place-items-center w-fit shrink-0">
          <h1 class="text-8xl font-black">I'M MOVING SHEEESH</h1>
          <span class="text-7xl font-black">⬅️</span>
        </div>
        <div class="marquee__part flex place-items-center w-fit shrink-0">
          <h1 class="text-8xl font-black">I'M MOVING SHEEESH</h1>
          <span class="text-7xl font-black">⬅️</span>
        </div>
        <div class="marquee__part flex place-items-center w-fit shrink-0">
          <h1 class="text-8xl font-black">I'M MOVING SHEEESH</h1>
          <span class="text-7xl font-black">⬅️</span>
        </div>
        <div class="marquee__part flex place-items-center w-fit shrink-0">
          <h1 class="text-8xl font-black">I'M MOVING SHEEESH</h1>
          <span class="text-7xl font-black">⬅️</span>
        </div>
      </div>
    </div>
    <div class="spacer w-full h-screen bg-slate-800"></div>
  </main>
</template>
