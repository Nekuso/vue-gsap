<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, onBeforeUnmount } from 'vue'
import { Routes } from '@/constants/route-names'
import router from '@/router'

const tl = gsap.timeline()

const exit = async () => {
  const overlays = gsap.utils.toArray('.overlay')
  tl.to('.box', {
    display: 'flex',
  })
  await tl.to(overlays.reverse(), {
    scale: 1,
    duration: 1,
    ease: 'power2.inOut',
    stagger: 0.3
  })
  router.push({ name: Routes.HOME })
}

onMounted(() => {
  const overlays = gsap.utils.toArray('.overlay')

  tl.to(overlays, {
    scale: 0,
    duration: 2,
    ease: 'power2.inOut',
    stagger: 0.3
  })
  tl.to('.box', {
    display: 'none',
  })
})
</script>

<template>
  <main class="content w-full h-screen bg-cyan-700 flex justify-center place-items-center relative">
    <div class="box w-full h-screen absolute overflow-hidden flex justify-center place-items-center">
      <div class="overlay z-30 absolute w-[200vw] h-[200vw] bg-cyan-950 rounded-full"></div>
      <div class="overlay z-20 absolute w-[200vw] h-[200vw] bg-cyan-900 rounded-full"></div>
      <div class="overlay z-10 absolute w-[200vw] h-[200vw] bg-cyan-800 rounded-full"></div>
    </div>
    <button class="text-xl font-black button w-auto px-11 py-4 bg-white rounded-full" @click="exit">
      PLUS ULTRA
    </button>
  </main>
</template>
