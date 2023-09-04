<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { Routes } from '@/constants/route-names'

const tl = gsap.timeline()

onMounted(() => {
  tl.to
})
</script>

<template>
  <main class="content w-full h-screen bg-blue-700 flex justify-center place-items-center">
    <RouterLink
      :to="{ name: Routes.SECOND }"
      @click=""
      class="text-xl font-black button w-auto px-11 py-4 bg-white rounded-full"
    >
      EXPLORE
    </RouterLink>
  </main>
</template>
