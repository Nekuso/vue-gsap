<script setup lang="ts">
import gsap from 'gsap'
import Lenis from '@studio-freight/lenis'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()
const lenis = new Lenis()

function raf(time: any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

onMounted(() => {
  const textElements = gsap.utils.toArray('.text')

  textElements.forEach((text: any) => {
    tl.to(text, {
      scrollTrigger: {
        trigger: text,
        start: 'center 80%',
        end: 'center 20%',
        scrub: true
      },
      backgroundSize: '100%',
      ease: 'none'
    })
  })
})
</script>

<template>
  <main class="w-full flex flex-col justify-center place-items-center bg-black">
    <div
      class="w-full h-screen text-8xl font-black flex flex-column justify-center place-items-center"
    >
      <h1 class="text-white">SCROLL DOWN SLOWLY</h1>
    </div>
    <div class="content w-full h-screen px-[20rem] flex flex-col justify-center place-items-center">
      <h1 class="text font-black">
        TRACKXP<img
          src="https://i.pinimg.com/originals/c1/fc/9d/c1fc9d7f6ae08d56f2b84e81799790a5.gif"
        />
      </h1>
      <h1 class="text font-black">
        ICHIRAKU<img
          src="https://i.pinimg.com/originals/99/cd/09/99cd0925c516b5d0a740dffd03c3e0df.gif"
        />
      </h1>
      <h1 class="text font-black">
        HEYMEAL<img
          src="https://i.pinimg.com/originals/1a/ca/14/1aca1432f8a8f93d4bd0932a8c0a6449.gif"
        />
      </h1>
      <h1 class="text font-black">
        MARINA TOWN
        <img src="https://i.pinimg.com/originals/d5/f3/e7/d5f3e7e33f8072785936fe88cd16f502.gif" />
      </h1>
    </div>
    <div class="content w-full h-screen px-[20rem] flex flex-col justify-center place-items-center">
      <h1 class="text font-black">TRACKXP<span>TRY THIS</span></h1>
      <h1 class="text font-black">ICHIRAKU<span>RAMEN STORE</span></h1>
      <h1 class="text font-black">HEYMEAL<span>RECIPES!!</span></h1>
      <h1 class="text font-black">MARINA TOWN <span>Nothing Fancy</span></h1>
    </div>
    <div class="w-full h-screen"></div>
  </main>
</template>

<style>
.text {
  font-size: 8vw;
  letter-spacing: -0.01em;
  line-height: 100%;
  margin: 0;

  width: 100%;
  color: rgb(182, 182, 182, 0.2);
  background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 0%;
  transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;

  border-bottom: 1px solid #2f2b28;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
}

span {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #8d74c2;
  color: #0d0d0d;

  clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  transform-origin: center;
  transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
img {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  object-fit: cover;

  clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  transform-origin: center;
  transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text:hover > span {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
.text:hover > img {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}
</style>
