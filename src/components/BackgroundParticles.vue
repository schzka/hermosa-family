<template>
  <div class="bg-particles" aria-hidden="true">
    <div 
      v-for="n in 18" 
      :key="n" 
      class="bg-particle"
      :style="getParticleStyle(n)"
    ></div>
    <!-- Subtle Ambient Gold Crest Ring -->
    <div class="bg-vector-crest"></div>
  </div>
</template>

<script setup>
function getParticleStyle(n) {
  const size = Math.floor(Math.abs(Math.sin(n * 99)) * 3 + 2)
  const left = ((n * 17) % 96) + 2
  const duration = Math.floor((n * 13) % 16) + 14
  const delay = Math.floor((n * 7) % 12)
  const opacity = (n % 2 === 0 ? 0.35 : 0.18)

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `-${delay}s`,
    opacity: opacity
  }
}
</script>

<style scoped>
.bg-particles {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.bg-particle {
  position: absolute;
  bottom: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, #f5d788 0%, #c9a24b 70%, transparent 100%);
  animation: floatUp linear infinite;
  will-change: transform;
}

@keyframes floatUp {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, -115vh, 0); }
}

.bg-vector-crest {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 960px;
  height: 960px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(201, 162, 75, 0.04) 0%, rgba(18, 61, 43, 0.02) 45%, transparent 70%);
  border: 1px solid rgba(201, 162, 75, 0.05);
  pointer-events: none;
}
</style>
