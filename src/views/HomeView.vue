<script setup lang="ts">
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
// register the scrolltrigger plugin
gsap.registerPlugin(ScrollTrigger)

// For smooth scrolling
const lenis = new Lenis()
function raf(time: number) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

onMounted(() => {
  const splitTypes: object[] = gsap.utils.toArray('.reveal-type')
  splitTypes.forEach((char: any, i) => {
    const text = new SplitType(char, { types: 'chars, words' })
    gsap.from(text.chars, {
      // y: 100,
      opacity: 0.1,
      stagger: 0.01,
      // duration: 1,
      scrollTrigger: {
        trigger: char,
        start: '-80% center',
        end: 'start center',
        scrub: true,
        markers: true,
        toggleActions: 'play reverse play reverse'
      }
    })
  })
})
</script>

<template>
  <main class="w-full h-auto flex flex-col justify-center place-items center place-items-center">
    <div class="w-full h-screen flex justify-center place-items-center bg-white">
      <h1 class="text-5xl font-black">Scroll slowly...</h1>
    </div>
    <div class="w-full h-screen flex justify-center place-items-center bg-orange-800">
      <h1 class="reveal-type text-white font-black text-5xl w-[1200px]">
        This is a sample text that's about to be turned in to an awesome modern scroll text. Be
        amazed because it took a lot of coding fuckery to make this!
      </h1>
    </div>
    <div class="w-full h-screen flex justify-center place-items-center bg-blue-800">
      <h1 class="reveal-type text-white font-black text-5xl w-[1200px]">
        This is a sample text that's about to be turned in to an awesome modern scroll text. Be
        amazed because it took a lot of coding fuckery to make this!
      </h1>
    </div>
    <div class="w-full h-screen flex justify-center place-items-center bg-teal-800">
      <h1 class="reveal-type text-white font-black text-5xl w-[1200px]">
        This is a sample text that's about to be turned in to an awesome modern scroll text. Be
        amazed because it took a lot of coding fuckery to make this!
      </h1>
    </div>
    <div class="w-full h-screen flex justify-center place-items-center bg-purple-800">
      <h1 class="reveal-type text-white font-black text-5xl w-[1200px]">
        This is a sample text that's about to be turned in to an awesome modern scroll text. Be
        amazed because it took a lot of coding fuckery to make this!
      </h1>
    </div>
  </main>
</template>
