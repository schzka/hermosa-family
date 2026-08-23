<template>
  <div>
    <section class="page-header">
      <p class="page-header__eyebrow">Official Family Vault</p>
      <h1 class="page-header__title text-shimmer">Showcase</h1>
      <p class="page-header__desc">Explore the official Hermosa family logos, insignia crests, and main official soundtracks (OSTs).</p>
    </section>

    <!-- SECTION 1: FAMILY LOGOS & CRESTS -->
    <section class="media-section">
      <div class="section-head">
        <span class="section-head__eyebrow">Identity & Insignias</span>
        <h2 class="section-head__title">Family Logos</h2>
        <p class="section-head__desc">The official seals, monograms, and emblems of the Hermosa family.</p>
      </div>

      <div class="logos-grid">
        <div class="logo-card" v-for="logo in logos" :key="logo.title">
          <div class="logo-card__image-wrap" @click="openLogoLightbox(logo)">
            <img :src="logo.src" :alt="logo.title" class="logo-card__img" />
            <div class="logo-card__overlay">
              <span class="logo-card__zoom-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-1px; margin-right:4px;">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
                Expand View
              </span>
            </div>
          </div>
          <div class="logo-card__info">
            <h3 class="logo-card__title">{{ logo.title }}</h3>
            <p class="logo-card__desc">{{ logo.desc }}</p>
            <a :href="logo.src" :download="logo.filename" class="btn btn--ghost logo-card__btn">
              Download Logo
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:-2px; margin-left:6px;">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: OFFICIAL SOUNDTRACKS (OST) -->
    <section class="media-section">
      <div class="section-head">
        <span class="section-head__eyebrow">Audio & Cinema</span>
        <h2 class="section-head__title">Official Soundtracks (OST)</h2>
        <p class="section-head__desc">Listen to the main official soundtrack and cinematic themes of the Hermosa family.</p>
      </div>

      <div class="videos-grid">
        <div class="video-card" v-for="video in videos" :key="video.id" :class="{ 'video-card--main': video.isMain }">
          <div class="video-card__frame">
            <iframe 
              :src="`https://www.youtube.com/embed/${video.id}`" 
              :title="video.title"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
          </div>
          <div class="video-card__info">
            <span class="video-card__badge" :class="{ 'video-card__badge--main': video.isMain }">
              {{ video.badge }}
            </span>
            <h3 class="video-card__title">{{ video.title }}</h3>
            <p class="video-card__desc">{{ video.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Logo Lightbox Overlay -->
    <Teleport to="body">
      <Transition name="fade">
        <div class="lightbox-overlay" v-if="activeLightboxLogo" @click="closeLogoLightbox">
          <div class="lightbox-content">
            <button class="lightbox-close" @click="closeLogoLightbox">✕</button>
            <img :src="activeLightboxLogo.src" :alt="activeLightboxLogo.title" class="lightbox-img" />
            <p class="lightbox-caption">✦ {{ activeLightboxLogo.title }} ✦</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import logoMain from '../assets/logo/HERMOSA.png'
import logoCrest from '../assets/logo/HERMOSA2.png'
import logoFamilia from '../assets/logo/Syndicate-Familia-Hermorsa_Logo.png'
import logoGif from '../assets/logo/B5EC7325-B028-412C-ADAD-CD49120BEA44.gif'

const activeLightboxLogo = ref(null)

const logos = ref([
  {
    title: 'Hermosa Primary Logo',
    desc: 'Official Hermosa family gold insignia logo.',
    src: logoMain,
    filename: 'HERMOSA_Logo.png'
  },
  {
    title: 'Hermosa Crest & Emblem',
    desc: 'Secondary Hermosa family shield emblem.',
    src: logoCrest,
    filename: 'HERMOSA_Crest.png'
  },
  {
    title: 'Familia Hermosa Seal',
    desc: 'Official Familia Hermosa insignia seal.',
    src: logoFamilia,
    filename: 'Familia_Hermosa_Logo.png'
  },
  {
    title: 'Hermosa Animated Crest',
    desc: 'Official animated family seal emblem.',
    src: logoGif,
    filename: 'Hermosa_Animated_Seal.gif'
  }
])

const videos = ref([
  {
    id: '5rvmEk6ynuc',
    title: 'Hermosa Main OST',
    desc: 'The main official soundtrack celebrating the Hermosa family legacy.',
    badge: '★ MAIN FAMILY OST',
    isMain: true
  },
  {
    id: 'BAnEUbqG_7U',
    title: 'Hermosa Secondary OST',
    desc: 'Official soundtrack video showcasing family operations and history.',
    badge: 'HERMOSA OST #2',
    isMain: false
  },
  {
    id: 'B6nAyv50HLw',
    title: 'Hermosa Cinematic OST',
    desc: 'Cinematic soundtrack montage featuring Hermosa family roleplay moments.',
    badge: 'HERMOSA OST #3',
    isMain: false
  }
])

function openLogoLightbox(logo) {
  activeLightboxLogo.value = logo
}

function closeLogoLightbox() {
  activeLightboxLogo.value = null
}

function handleKeyDown(e) {
  if (e.key === 'Escape' && activeLightboxLogo.value) {
    closeLogoLightbox()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>
