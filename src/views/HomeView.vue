<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'
import SplitType from 'split-type'

const tl = gsap.timeline()

onMounted(() => {
  const text = new SplitType('#brand')
  tl.to('.char', {
    duration: .5,
    y: 0,
    stagger: 0.05,
    ease:"power4"
  })
})
</script>

<template>
  <header class="w-screen h-screen flex justify-center place-items-center">
    <h1 id="brand" class="leading-[4rem] font-extrabold text-7xl bg-clip-content [clip-path:polygon(0_0,_100%_0,100%_100%,0%_100%)]">NEKUSO</h1>
  </header>
</template>

<style>
.char {
  transform: translateY(100%);
}
</style>
