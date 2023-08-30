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
      end: '+=3000',
      markers: true
    }
  })

  sections.forEach((section: any) => {
    let text = section.querySelectorAll('.anim')

    gsap.from(text, {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: ' elastic',
      stagger: 0.1,
      scrollTrigger: {
        trigger: section,
        containerAnimation: scrollTween,
        start: 'start center',
        markers: true
      }
    })
  })
})
</script>

<template>
  <main class="wrapper w-full h-screen">
    <div class="spacer w-full h-screen bg-gray-700"></div>

    <div class="content w-auto h-screen bg-black flex overflow-hidden">
      <section
        class="w-screen h-full flex justify-center place-items-center bg-purple-700 flex-shrink-0"
      >
        <h1 class="anim font-black text-6xl text-white">NEKUSO</h1>
      </section>
      <section
        class="w-screen h-full flex justify-center place-items-center bg-teal-700 flex-shrink-0"
      >
        <h1 class="anim font-black text-6xl text-white">NEKUSO</h1>
      </section>
      <section
        class="w-screen h-full flex justify-center place-items-center bg-blue-700 flex-shrink-0"
      >
        <h1 class="anim font-black text-6xl text-white">NEKUSO</h1>
      </section>
      <section
        class="w-screen h-full flex justify-center place-items-center bg-orange-700 flex-shrink-0"
      >
        <h1 class="anim font-black text-6xl text-white">NEKUSO</h1>
      </section>
      <section
        class="w-screen h-full flex justify-center place-items-center bg-cyan-700 flex-shrink-0"
      >
        <h1 class="anim font-black text-6xl text-white">NEKUSO</h1>
      </section>
    </div>

    <div class="spacer w-full h-screen bg-gray-700"></div>
  </main>
</template>

<style scoped></style>
