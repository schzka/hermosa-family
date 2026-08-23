<template>
  <header class="nav">
    <router-link to="/" class="nav__brand">
      <span class="nav__brand-symbol">✦</span>HERMOSA
    </router-link>
    
    <nav class="nav__links">
      <router-link to="/">Home</router-link>
      <router-link to="/hierarchy">Hierarchy</router-link>
      <router-link to="/branches">Branches</router-link>
      <router-link to="/media">Showcase</router-link>
      <a href="https://thesaint.online/" target="_blank" rel="noopener noreferrer" class="nav__ext-link">Saints ↗</a>
    </nav>
  </header>
</template>

<script setup>
let audioCtx = null

function playClickSound() {
  try {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext
      audioCtx = new AudioCtxClass()
    }
    if (audioCtx.state === 'suspended') audioCtx.resume()

    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    const now = audioCtx.currentTime

    osc.connect(gain)
    gain.connect(audioCtx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(320, now)
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.05)
    gain.gain.setValueAtTime(0.08, now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05)

    osc.start(now)
    osc.stop(now + 0.05)
  } catch (e) {}
}

window.addEventListener('click', (e) => {
  if (e.target.closest('a, button, .tree__node, .tree__pick-card, .branch__head, .branch__member, .logo-card__image-wrap')) {
    playClickSound()
  }
}, { passive: true })
</script>
