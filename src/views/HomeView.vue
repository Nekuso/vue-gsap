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

  const halfW: number = width / 2
  const halfH: number = height / 2
  const mouseX: number = e.clientX - left
  const mouseY: number = e.clientY - top

  const x: number = gsap.utils.interpolate(-halfW, halfW, mouseX / width)
  const y: number = gsap.utils.interpolate(-halfH, halfH, mouseY / height)

  gsap.to(content, {
    x: x,
    y: y,
    duration: .3,
    ease: 'power1',
    overwrite: true
  })
}

function onLeave(e: any) {
  const content = e.target.firstChild
  gsap.to(content, {
    x: 0,
    y: 0,
    ease: 'elastic',
    duration: 1,
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
        class="box border w-36 h-36 relative overflow-hidden"
        @mousemove="onMouseMove($event)"
        @mouseleave="onLeave"
      >
        <div
          class="content p-3 rounded-full text-xl absolute top-2/4 left-1/2 -translate-x-2/4 -translate-y-1/2 bg-orange-600"
        ></div>
      </li>
    </ul>
  </main>
</template>

<style></style>
