<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollToPlugin)

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  const tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: '.img',
        scrub: true
      }
    })
    .to('.img', {
      stagger: 0.2,
      y: -700,
      scrub: true
    })
})
</script>

<template>
  <div class="w-full h-full">
    <section class="grid h-screen">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </section>

    <section class="grid h-screen">
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
      <div class="img"></div>
    </section>
  </div>
</template>

<style scoped>
section {
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
}

.img {
  width: 100%;
  height: 700px;
  position: relative;
  background-size: cover;
  z-index: -1;
}

.img:nth-of-type(1) {
  background-image: url('https://assets.codepen.io/2621168/img1.jpg');
}

.img:nth-of-type(2) {
  background-image: url('https://assets.codepen.io/2621168/img1.jpg');
}

.img:nth-of-type(3) {
  background-image: url('https://assets.codepen.io/2621168/img1.jpg');
}

.img:nth-of-type(4) {
  background-image: url('https://assets.codepen.io/2621168/img1.jpg');
}

.img:nth-of-type(5) {
  background-image: url('https://assets.codepen.io/2621168/img1.jpg');
}

.img:nth-of-type(6) {
  background-image: url('https://assets.codepen.io/2621168/img1.jpg');
}

.img:nth-of-type(7) {
  background-image: url('https://assets.codepen.io/2621168/img1.jpg');
}

.img:nth-of-type(8) {
  background-image: url('https://assets.codepen.io/2621168/img1.jpg');
}

.img:nth-of-type(9) {
  background-image: url('https://assets.codepen.io/2621168/img1.jpg');
}

.img:before {
  content: '';
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 4;
  top: 0;
  left: 0;
  border-right: 1px solid black;
}

.line {
  border-right: 1px solid black;
}
</style>
