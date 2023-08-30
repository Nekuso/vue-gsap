<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  // duration: 1
})
function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

onMounted(() => {
  const sections = gsap.utils.toArray('section')
  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '.content',
      pin: true,
      scrub: true,
      end: '+=6000',
      markers: true
    }
  })
})
</script>

<template>
  <main class="wrapper w-full h-screen">
    <div class="spacer w-full h-screen bg-gray-700"></div>

    <div class="content w-auto h-screen bg-black flex overflow-hidden">
      <section class="w-screen h-full bg-purple-700 flex-shrink-0"></section>
      <section class="w-screen h-full bg-teal-700 flex-shrink-0"></section>
      <section class="w-screen h-full bg-blue-700 flex-shrink-0"></section>
      <section class="w-screen h-full bg-orange-700 flex-shrink-0"></section>
      <section class="w-screen h-full bg-yellow-700 flex-shrink-0"></section>
    </div>

    <div class="spacer w-full h-screen bg-gray-700"></div>
  </main>
</template>

<style scoped></style>
