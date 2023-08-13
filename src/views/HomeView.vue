<script setup lang="ts">
import gsap from 'gsap'
import { ref, watch } from 'vue'

const tl = gsap.timeline()

const text = ref<string>('')

const textArray = ref<string[]>([])
</script>

<template>
  <main class="w-screen h-screen flex flex-col justify-center place-items-center gap-8">
    <ul class="w-full flex justify-center">
      <span v-for="(text, index) in textArray" :key="index">
        <li class="text text-4xl font-bold opacity-0">{{ text }}</li>
      </span>
    </ul>
    <div class="flex gap-5">
      <input v-model="text" type="text" class="border rounded-xl px-3" />

      <button class="h-10 w-[16rem] border rounded-xl bg-black font-bold text-white shadow-xl">
        Toggle
      </button>
    </div>
  </main>
</template>
