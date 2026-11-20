<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpLeft } from '@lucide/vue'
import BrandIcon from './BrandIcon.vue'
import { categories, waLink } from '../data'

// Desktop: section is pinned and vertical scroll drives the card track horizontally.
// Mobile: plain native swipe with snap.
const section = ref()
const track = ref()
const pinned = ref(false)
const max = ref(0)
const x = ref(0)
const progress = ref(0)
const mq = matchMedia('(min-width: 1024px)')

function update() {
  if (!pinned.value) return
  const r = section.value.getBoundingClientRect()
  const p = Math.min(Math.max(-r.top / (r.height - innerHeight || 1), 0), 1)
  progress.value = p
  x.value = p * max.value
}
function measure() {
  pinned.value = mq.matches
  max.value = pinned.value ? Math.max(track.value.offsetWidth - section.value.clientWidth, 0) : 0
  update()
}
onMounted(() => {
  measure()
  addEventListener('scroll', update, { passive: true })
  addEventListener('resize', measure)
})
onUnmounted(() => {
  removeEventListener('scroll', update)
  removeEventListener('resize', measure)
})
</script>

<template>
  <section id="products" ref="section" class="relative bg-brand-900 text-white" :style="pinned ? { height: `calc(100vh + ${max}px)` } : null">
    <div class="relative flex flex-col justify-center overflow-hidden py-20 lg:sticky lg:top-0 lg:h-screen lg:py-0">
      <div class="pointer-events-none absolute -top-32 right-1/4 h-[420px] w-[620px] rounded-full bg-brand-500/25 blur-[140px]"></div>

      <div class="relative mx-auto mb-10 flex w-full max-w-7xl flex-col gap-6 px-5 sm:px-8 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
        <div v-reveal>
          <p class="font-serif text-lg tracking-[0.25em] text-glow uppercase italic">Our Collection</p>
          <h2 class="mt-3 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            كل ما يحتاجه حمّامك،<br />
            <span class="text-brand-200">في مكان واحد.</span>
          </h2>
        </div>
        <div v-reveal="150" class="flex items-center gap-5 lg:w-80">
          <p class="flex-1 text-white/60"><span class="hidden lg:inline">مرّر للأسفل</span><span class="lg:hidden">اسحب</span> لاستعراض الأقسام اللي نتعامل بيها، واضغط على أي قسم لتشوف صور وأفكار منه.</p>
        </div>
      </div>

      <div class="relative max-lg:snap-x max-lg:snap-mandatory max-lg:overflow-x-auto max-lg:[scrollbar-width:none]">
        <div ref="track" class="flex w-max gap-5 px-5 will-change-transform sm:px-8 lg:gap-7 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
             :style="pinned ? { transform: `translate3d(${x}px,0,0)` } : null">
          <router-link v-for="(c, i) in categories" :key="c.slug" :to="{ path: '/gallery', query: { cat: c.slug } }"
                       class="group relative aspect-[3/4] w-[78vw] shrink-0 snap-center overflow-hidden rounded-[2rem] bg-brand-800 sm:w-[44vw] lg:w-[min(30vw,25rem)]">
            <img :src="c.img" :alt="c.title" loading="lazy" class="absolute inset-0 size-full object-cover transition-transform duration-[1.4s] ease-(--ease-out-expo) group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>

            <span class="absolute top-5 right-6 font-serif text-5xl font-semibold text-white/90">0{{ i + 1 }}</span>
            <span class="absolute top-6 left-6 grid size-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-brand-700">
              <ArrowUpLeft :size="20" />
            </span>

            <div class="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <p class="font-serif text-lg text-glow italic">{{ c.en }}</p>
              <h3 class="mt-1 text-2xl font-bold sm:text-3xl">{{ c.title }}</h3>
              <div class="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-(--ease-out-expo) group-hover:grid-rows-[1fr] max-lg:grid-rows-[1fr]">
                <p class="overflow-hidden text-sm leading-relaxed text-white/70"><span class="block pt-3">{{ c.desc }}</span></p>
              </div>
            </div>
          </router-link>

          <!-- closing CTA card -->
          <article class="relative flex aspect-[3/4] w-[78vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-800 p-8 sm:w-[44vw] lg:w-[min(30vw,25rem)]">
            <img src="/opra-logo-white.png" alt="" class="w-24 opacity-90" />
            <div>
              <h3 class="text-3xl leading-snug font-bold">تبي تعرف<br />المتوفر حالياً؟</h3>
              <p class="mt-3 text-white/70">راسلنا ونخبرك بالتشكيلة المتوفرة، وفريقنا يساعدك تختار الأنسب لمساحتك.</p>
              <a :href="waLink()" target="_blank" rel="noopener"
                 class="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 font-semibold text-brand-700 transition-transform hover:-translate-y-0.5">
                <BrandIcon name="whatsapp" :size="20" class="text-wa" /> تواصل عبر واتساب
              </a>
            </div>
            <svg class="pointer-events-none absolute -bottom-6 left-0 w-[160%] text-white/10" viewBox="0 0 400 60" aria-hidden="true">
              <path d="M0 30 Q50 0 100 30 T200 30 T300 30 T400 30" fill="none" stroke="currentColor" stroke-width="10" />
            </svg>
          </article>
        </div>
      </div>

      <div class="relative mx-auto mt-10 hidden w-full max-w-7xl items-center gap-4 px-8 lg:flex">
        <span class="font-serif text-lg text-white/50">01</span>
        <div class="h-px flex-1 bg-white/15">
          <div class="h-full origin-right bg-glow" :style="{ transform: `scaleX(${progress})` }"></div>
        </div>
        <span class="font-serif text-lg text-white/50">0{{ categories.length }}</span>
      </div>
    </div>
  </section>
</template>
