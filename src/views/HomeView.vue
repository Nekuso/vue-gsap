<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Routes } from '@/constants/route-names'

const tl = gsap.timeline()
</script>

<template>
  <main class="w-full h-screen bg-blue-700 flex justify-center place-items-center">
    <RouterLink :to="{ name: Routes.SECOND }">
      <h1 class="text-4xl font-black text-white">EXPLORE</h1>
    </RouterLink>
  </main>
</template>
