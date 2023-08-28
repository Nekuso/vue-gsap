<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

onMounted(() => {
  const boxes = gsap.utils.toArray('.box')
  boxes.forEach((box: any) => {
    tl.to(box, {
      scrollTrigger: {
        trigger: box,
        start: '-40% center',
        end: 'center center',
        markers: true,
        scrub: true
      },
      x: '100%',
      xPercent: 450,
      duration: 6,
      borderRadius: '10rem'
    })
  })
})
</script>

<template>
  <div class="w-100% flex flex-col overflow-hidden">
    <div class="flex p-8 place-items-center w-100% h-screen bg-lime-400 overflow-hidden"></div>
    <div class="flex p-8 place-items-center w-100% h-screen bg-blue-400 overflow-hidden">
      <div class="box w-60 h-60 bg-white rounded-xl"></div>
    </div>
    <div class="flex p-8 place-items-center w-100% h-screen bg-yellow-400 overflow-hidden">
      <div class="box w-60 h-60 bg-white rounded-xl"></div>
    </div>
    <div class="flex p-8 place-items-center w-100% h-screen bg-purple-400 overflow-hidden">
      <div class="box w-60 h-60 bg-white rounded-xl"></div>
    </div>
  </div>
</template>
