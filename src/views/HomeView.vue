<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'

const tl = gsap.timeline()

const mouseLeave = () => {
  console.log('leave')
}
const mouseEnter = () => {
  console.log('Enter')
}
</script>

<template>
  <main class="w-screen h-screen flex justify-center place-items center place-items-center">
    <ul class="links flex flex-wrap justify-between place-items-center gap-8 font-black w-[400px]">
      <li v-on:mouseenter="mouseEnter" v-on:mouseleave="mouseLeave" class="text-4xl link">
        Linkedin
      </li>
      <li class="text-4xl link">Instagram</li>
      <li class="text-4xl link">Github</li>
      <li class="text-4xl link">Facebook</li>
      <li class="text-4xl link">Youtube</li>
      <li class="text-4xl link">Dribble</li>
    </ul>
  </main>
</template>
