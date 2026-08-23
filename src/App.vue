<template>
  <div id="app-root">
    <BackgroundParticles />
    <CursorSpotlight />
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CursorSpotlight from './components/CursorSpotlight.vue'
import BackgroundParticles from './components/BackgroundParticles.vue'
</script>

<style>
@import './assets/styles.css';
</style>
