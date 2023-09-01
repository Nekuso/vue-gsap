<script setup lang="ts">
import gsap from 'gsap'
import { onMounted, ref } from 'vue'

const items = ref([
  { id: 1, text: 'Magnet' },
  { id: 2, text: 'Magnet' },
  { id: 3, text: 'Magnet' },
  { id: 4, text: 'Magnet' },
  { id: 5, text: 'Magnet' },
  { id: 6, text: 'Magnet' }
])

function onMouseMove(e: any) {
  const container = e.currentTarget
  const content = e.target.firstChild
  const { top, left, width, height } = container.getBoundingClientRect()

  const halfW = width / 2
  const halfH = height / 2
  const mouseX = e.clientX - left
  const mouseY = e.clientY - top

  const x = gsap.utils.interpolate(-halfW, halfW, mouseX / width)
  const y = gsap.utils.interpolate(-halfH, halfH, mouseY / height)

  gsap.to(content, {
    x: x,
    y: y,
    duration: 0.6,
    ease: 'power1',
    overwrite: true
  })
}

function onLeave(e: any) {
  const content = e.target.firstChild

  gsap.to(content, {
    x: 0,
    y: 0,
    ease: 'power3',
    duration: 0.6,
    overwrite: true
  })
}

onMounted(() => {})
</script>

<template>
  <main class="w-screen h-screen flex justify-center place-items-center">
    <ul class="links flex flex-wrap justify-between place-items-center gap-8 font-black w-[400px]">
      <li
        v-for="item in items"
        :key="item.id"
        class="box border w-36 h-36 relative"
        @mousemove="onMouseMove($event)"
        @mouseleave="onLeave"
      >
        <h2 class="content text-xl absolute top-2/4 left-1/2 -translate-x-2/4 -translate-y-1/2">
          {{ item.text }}
        </h2>
      </li>
    </ul>
  </main>
</template>

<style></style>
