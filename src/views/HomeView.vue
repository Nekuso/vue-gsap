<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'

const tl = gsap.timeline()
</script>

<template>
  <main class="w-full flex flex-col justify-center place-items-center">
    <div class="w-full h-screen"></div>
    <div class="content w-full h-screen bg-red-700"></div>
    <div class="w-full h-screen"></div>
  </main>
</template>
