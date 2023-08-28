<script setup lang="ts">
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import ScrollTrigger from 'gsap'
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
  const splitTypes = gsap.utils.toArray('.reveal-type')
  splitTypes.forEach((char: any, i) => {
    const text = new SplitType(char, { types: 'chars' })

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
        // markers: true,
      },
      opacity: 0.2,
      stagger: 0.01
    })
  })
})
</script>

<template>
  <main class="w-full h-auto flex flex-col justify-center place-items center place-items-center">
    <div class="w-full h-screen flex justify-center place-items-center bg-orange-800">
      <h1 class="reveal-type text-white font-black text-6xl w-[1400px]">
        This is a sample text that's about to be turned in to an awesome modern scroll text. Be
        amazed because it took a lot of coding fuckery to make this!
      </h1>
    </div>
    <div class="w-full h-screen flex justify-center place-items-center bg-blue-800">
      <h1 class="reveal-type text-white font-black text-6xl w-[1400px]">
        This is a sample text that's about to be turned in to an awesome modern scroll text. Be
        amazed because it took a lot of coding fuckery to make this!
      </h1>
    </div>
    <div class="w-full h-screen flex justify-center place-items-center bg-teal-800">
      <h1 class="reveal-type text-white font-black text-6xl w-[1400px]">
        This is a sample text that's about to be turned in to an awesome modern scroll text. Be
        amazed because it took a lot of coding fuckery to make this!
      </h1>
    </div>
    <div class="w-full h-screen flex justify-center place-items-center bg-purple-800">
      <h1 class="reveal-type text-white font-black text-6xl w-[1400px]">
        This is a sample text that's about to be turned in to an awesome modern scroll text. Be
        amazed because it took a lot of coding fuckery to make this!
      </h1>
    </div>
  </main>
</template>
