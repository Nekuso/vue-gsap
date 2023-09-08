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
  <main class="w-full h-screen flex flex-col justify-center place-items-center"></main>
</template>
