<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import FloatingWhatsApp from './components/FloatingWhatsApp.vue'
import CursorFollower from './components/CursorFollower.vue'

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
const root = document.documentElement

// first-load intro
const intro = ref(true)
onMounted(() => setTimeout(() => {
  intro.value = false
  root.classList.add('ready') // starts entrance + reveal animations
}, reduced ? 0 : 1600))

// page change: a wave curtain rises over the page, the route swaps underneath, then it lifts away.
// html.covered holds back reveal animations so they play as the curtain lifts.
const curtain = ref('')
const router = useRouter()
router.beforeEach((to, from) => {
  if (reduced || !from.matched.length || to.path === from.path) return
  curtain.value = 'cover'
  root.classList.add('covered')
  return new Promise((r) => setTimeout(r, 720))
})
router.afterEach(() => {
  if (curtain.value !== 'cover') return root.classList.remove('covered')
  setTimeout(() => {
    curtain.value = 'reveal'
    root.classList.remove('covered')
  }, 140)
})
const onCurtainEnd = () => { if (curtain.value === 'reveal') curtain.value = '' }
</script>

<template>
  <!-- shared water-ripple filter for v-water -->
  <svg class="absolute size-0" aria-hidden="true">
    <filter id="water" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.008 0.03" numOctaves="2" seed="7" result="n">
        <animate attributeName="baseFrequency" dur="9s" values="0.008 0.03;0.012 0.044;0.008 0.03" repeatCount="indefinite" />
      </feTurbulence>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G" />
    </filter>
  </svg>

  <Transition name="intro">
    <div v-if="intro" class="fixed inset-0 z-[100] grid place-items-center bg-brand-900">
      <div class="flex flex-col items-center gap-6">
        <img src="/opra-logo-white.png" alt="OPRA" class="intro-logo w-40 sm:w-48" />
        <div class="h-px w-40 overflow-hidden bg-white/15"><div class="intro-bar h-full bg-glow"></div></div>
        <p class="intro-tag text-lg font-bold text-white">الإنجاز العصري</p>
      </div>
      <svg class="absolute top-full left-0 h-16 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 H1440 V20 Q1080 80 720 40 T0 30Z" class="fill-brand-900" />
      </svg>
    </div>
  </Transition>

  <!-- page curtain -->
  <div class="curtain" :class="curtain" aria-hidden="true" @transitionend.self="onCurtainEnd">
    <svg class="absolute bottom-full left-0 h-14 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0 80 V50 Q360 0 720 40 T1440 30 V80Z" class="fill-brand-700" /></svg>
    <div class="curtain-mark flex flex-col items-center gap-4">
      <img src="/opra-logo-white.png" alt="" class="w-28" />
      <p class="font-bold text-white/90">الإنجاز العصري</p>
    </div>
    <svg class="absolute top-full left-0 h-14 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0 0 H1440 V30 Q1080 80 720 40 T0 50Z" class="fill-brand-700" /></svg>
  </div>

  <div class="scroll-progress" aria-hidden="true"></div>
  <Navbar />

  <!-- content sits above the footer; on desktop it slides away to reveal the sticky footer -->
  <div class="relative z-10 bg-marble shadow-[0_40px_80px_-20px_rgba(7,31,68,0.45)]">
    <router-view />
  </div>
  <Footer class="z-0 lg:sticky lg:bottom-0" />

  <FloatingWhatsApp />
  <CursorFollower />
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

.curtain {
  position: fixed; inset: 0; z-index: 90; display: grid; place-items: center;
  background: var(--color-brand-700); pointer-events: none;
  transform: translateY(calc(100% + 4rem));
}
.curtain.cover { transform: translateY(0); transition: transform .72s var(--ease-in-out-quint); pointer-events: auto; }
.curtain.reveal { transform: translateY(calc(-100% - 4rem)); transition: transform .85s var(--ease-in-out-quint); }
.curtain-mark { opacity: 0; transform: translateY(16px); transition: opacity .4s, transform .6s var(--ease-out-expo); }
.cover .curtain-mark { opacity: 1; transform: none; transition-delay: .3s; }
</style>
