<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, onBeforeUnmount } from 'vue'
import { Routes } from '@/constants/route-names'
import router from '@/router'

const tl = gsap.timeline()

const exit = async () => {
  await tl.to('.overlay', {
    xPercent: -100,
    duration: 2,
    ease: "power2.inOut",
  })
  router.push({ name: Routes.SECOND })
}

onMounted(() => {
  tl.to('.overlay', {
    x: '100vw',
    xPercent: -200,
    duration: 2,
    ease: 'power2.inOut'
  })
})
</script>

<template>
  <main class="content w-full h-screen bg-blue-700 flex justify-center place-items-center relative">
    <div class="overlay absolute w-full h-full bg-slate-950"></div>
    <button class="text-xl font-black button w-auto px-11 py-4 bg-white rounded-full" @click="exit">
      EXPLORE
    </button>
  </main>
</template>
