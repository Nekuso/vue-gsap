<script setup lang="ts">
import { Routes } from '@/constants/route-names'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="content w-full h-screen bg-orange-700 flex place-items-center justify-center">
    <RouterLink
      :to="{ name: Routes.HOME }"
      @click=""
      class="text-xl font-black button w-auto px-11 py-4 bg-white rounded-full"
    >
      PLUS ULTRA
    </RouterLink>
  </main>
</template>

<style></style>
