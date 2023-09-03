<script setup lang="ts">
import { Routes } from '@/constants/route-names'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="w-full h-screen bg-slate-700 flex place-items-center justify-center">
    <RouterLink :to="{ name: Routes.THIRD }">
      <h1 class="text-4xl font-black text-white">GO BEYOND</h1>
    </RouterLink>
  </main>
</template>

<style></style>
