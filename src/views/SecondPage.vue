<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, onBeforeUnmount } from 'vue'
import { Routes } from '@/constants/route-names'
import router from '@/router'

const tl = gsap.timeline()

const exit = async () => {
  const overlays = gsap.utils.toArray('.overlay')

  await tl.to(overlays.reverse(), {
    yPercent: -100,
    duration: 1,
    ease: 'power2.inOut',
    stagger: 0.3
  })
  router.push({ name: Routes.THIRD })
}

onMounted(() => {
  const overlays = gsap.utils.toArray('.overlay')

  tl.to(overlays, {
    y: '100vh',
    yPercent: -200,
    duration: 2,
    ease: 'power2.inOut',
    stagger: 0.3
  })
})
</script>

<template>
  <main
    class="content w-full h-screen bg-purple-700 flex justify-center place-items-center relative"
  >
    <div class="overlay z-30 absolute w-full h-full bg-cyan-950"></div>
    <div class="overlay z-20 absolute w-full h-full bg-cyan-900"></div>
    <div class="overlay z-10 absolute w-full h-full bg-cyan-800"></div>
    <button class="text-xl font-black button w-auto px-11 py-4 bg-white rounded-full" @click="exit">
      GO BEYOND
    </button>
  </main>
</template>
