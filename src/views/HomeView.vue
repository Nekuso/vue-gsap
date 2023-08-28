<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Get all boxes
  const boxes: object[] = gsap.utils.toArray('.box')
  // Loop and apply scroll trigger to them
  boxes.forEach((box: any) => {
    gsap.to(box, {
      scrollTrigger: {
        trigger: box,
        start: 'top center',
        end: 'bottom center',
        markers: true,
        scrub: 1,
        // toggleActions won't work if you enable scrub :>
        toggleActions: 'play reverse play reverse'
      },
      x: '100%',
      xPercent: 400,
      rotate: 360,
      borderRadius: '50%',
      duration: .5
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
