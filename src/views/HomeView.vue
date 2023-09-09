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

const tl = gsap.timeline()
</script>

<template>
  <main class="w-full flex flex-col justify-center place-items-center">
    <div class="spacer w-full h-screen bg-slate-800"></div>
    <div class="content w-full h-screen bg-slate-700 flex flex-col justify-center place-items-center">
      <div class="marquee w-full bg-white">
        <h1>Marquee</h1>
      </div>

    </div>
    <div class="spacer w-full h-screen bg-slate-800"></div>
  
  </main>
</template>
