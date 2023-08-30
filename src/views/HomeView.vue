<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'

const tl = gsap.timeline()
</script>

<template>
  <main class="wrapper w-screen h-screen flex flex-col overflow-hidden">
    <div class="content w-full h-[50%] bg-black flex">
      <div class="w-screen h-full bg-purple-700 flex-shrink-0"></div>
      <div class="w-screen h-full bg-blue-700 flex-shrink-0"></div>
      <div class="w-screen h-full bg-teal-700 flex-shrink-0"></div>
      <div class="w-screen h-full bg-orange-700 flex-shrink-0"></div>
      
    </div>
  </main>
</template>


<style></style>
