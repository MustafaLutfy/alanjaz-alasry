<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'

const intro = ref(true)
onMounted(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
  setTimeout(() => {
    intro.value = false
    document.documentElement.classList.add('ready') // kicks off hero entrance animations
  }, reduced ? 0 : 1600)
})
</script>

<template>
  <Transition name="intro">
    <div v-if="intro" class="fixed inset-0 z-[100] grid place-items-center bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700">
      <div class="flex flex-col items-center gap-6">
        <img src="/opra-logo-white.png" alt="OPRA" class="intro-logo w-40 sm:w-48" />
        <div class="h-px w-40 overflow-hidden bg-white/15">
          <div class="intro-bar h-full bg-white/80"></div>
        </div>
        <p class="intro-tag text-lg font-bold text-white">الإنجاز العصري</p>
      </div>
      <svg class="absolute top-full left-0 h-16 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 H1440 V20 Q1080 80 720 40 T0 30Z" class="fill-brand-700" />
      </svg>
    </div>
  </Transition>

  <Navbar />
  <router-view v-slot="{ Component, route }">
    <Transition name="page" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </router-view>
  <Footer />
  <FloatingWhatsApp />
</template>

<style scoped>
.intro-logo { animation: logo-in 1.1s var(--ease-out-expo) both; }
.intro-bar { animation: bar 1.4s var(--ease-in-out-quint) both; transform-origin: right; }
.intro-tag { animation: logo-in 1s 0.35s var(--ease-out-expo) both; }

@keyframes logo-in {
  from { opacity: 0; transform: translateY(18px) scale(0.92); clip-path: inset(100% 0 0 0); }
  to { opacity: 1; transform: none; clip-path: inset(0 0 0 0); }
}
@keyframes bar { from { transform: scaleX(0); } to { transform: scaleX(1); } }

.intro-leave-active { transition: transform 1.1s var(--ease-in-out-quint); }
.intro-leave-to { transform: translateY(calc(-100% - 4rem)); }
</style>

<style>
.page-enter-active { transition: opacity .45s ease, transform .7s var(--ease-out-expo); }
.page-leave-active { transition: opacity .22s ease; }
.page-enter-from { opacity: 0; transform: translateY(14px); }
.page-leave-to { opacity: 0; }
</style>
