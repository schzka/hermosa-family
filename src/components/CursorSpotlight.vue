<template>
  <div class="cursor-spotlight" ref="spotlightRef" :style="spotlightStyle"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const spotlightRef = ref(null)
const spotlightStyle = ref({})

let ticking = false

const handleMouseMove = (e) => {
  const x = e.clientX
  const y = e.clientY
  if (!ticking) {
    requestAnimationFrame(() => {
      spotlightStyle.value = {
        transform: `translate3d(${x}px, ${y}px, 0)`
      }
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.cursor-spotlight {
  position: fixed;
  top: 0;
  left: 0;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  background: radial-gradient(circle, rgba(201, 162, 75, 0.14) 0%, rgba(28, 91, 64, 0.05) 50%, transparent 70%);
  margin-top: -240px;
  margin-left: -240px;
  will-change: transform;
  transition: opacity 0.4s ease;
}
</style>
