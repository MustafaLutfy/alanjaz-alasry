<script setup>
import { ref, onMounted } from 'vue'
import { Gem, Ship, Truck } from '@lucide/vue'
import Eyebrow from './Eyebrow.vue'
import Accent from './Accent.vue'

const steps = [
  { icon: Gem, title: 'اختيار من المصدر', text: 'ننتقي منتجاتنا بعناية من أفضل المصانع في الصين بجودة مضمونة.' },
  { icon: Ship, title: 'شحن وتغليف آمن', text: 'تغليف محكم يحمي كل قطعة حتى توصل سليمة لمعرضنا.' },
  { icon: Truck, title: 'توصيل لباب بيتك', text: 'نوفر خدمة التوصيل إلى جميع المحافظات بسهولة وأمان والتزام بالوقت.' },
]

// Draw the route once it scrolls into view
const route = ref()
const drawn = ref(false)
onMounted(() => {
  const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { drawn.value = true; io.disconnect() } }, { threshold: 0.4 })
  io.observe(route.value)
})
const path = 'M1040 210 C 860 40, 560 40, 420 150 S 200 260, 140 200'
</script>

<template>
  <section id="journey" class="section-y relative overflow-hidden bg-white">
    <div class="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(var(--color-brand-200)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>

    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <div v-reveal>
          <Eyebrow>من المصدر لبابك</Eyebrow>
          <h2 class="t-h2 mt-4">وين ما تكون..<br /><Accent>أوبرا توصلك.</Accent></h2>
        </div>
        <p v-reveal="150" class="t-lead mt-5 text-ink-soft">من المصنع إلى معرضنا ثم إلى باب بيتك — رحلة كل قطعة محسوبة بعناية.</p>
      </div>

      <div ref="route" v-reveal="150" class="relative mt-14 overflow-hidden rounded-media bg-marble ring-1 ring-ink/[0.06]">
        <svg viewBox="0 0 1180 330" class="h-auto w-full" :class="{ drawn }" aria-label="مسار الشحن من الصين إلى العراق" role="img">
          <defs>
            <linearGradient id="routeGrad" x1="1" x2="0">
              <stop offset="0" stop-color="var(--color-brand-400)" />
              <stop offset="1" stop-color="var(--color-brand-700)" />
            </linearGradient>
          </defs>
          <path :d="path" fill="none" stroke="var(--color-brand-100)" stroke-width="10" stroke-linecap="round" />
          <path :d="path" class="route-line" fill="none" stroke="url(#routeGrad)" stroke-width="3" stroke-dasharray="10 12" stroke-linecap="round" />

          <g v-if="drawn">
            <circle r="16" fill="var(--color-brand-700)" opacity="0.15">
              <animate attributeName="r" values="12;22;12" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle r="7" fill="var(--color-brand-700)" stroke="#fff" stroke-width="3" />
            <animateMotion :path="path" dur="5s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.6 0 0.4 1" />
          </g>

          <g transform="translate(1040 210)">
            <circle r="34" fill="var(--color-brand-100)" class="pin-pulse" />
            <circle r="12" fill="var(--color-brand-700)" stroke="#fff" stroke-width="4" />
            <text y="66" text-anchor="middle" class="fill-ink text-[24px] font-bold">الصين</text>
            <text y="92" text-anchor="middle" direction="ltr" class="fill-brand-500 font-serif text-[18px] italic">China</text>
          </g>
          <g transform="translate(140 200)">
            <circle r="34" fill="var(--color-brand-100)" class="pin-pulse" />
            <circle r="12" fill="var(--color-brand-700)" stroke="#fff" stroke-width="4" />
            <text y="66" text-anchor="middle" class="fill-ink text-[24px] font-bold">العراق</text>
            <text y="92" text-anchor="middle" direction="ltr" class="fill-brand-500 font-serif text-[18px] italic">All Governorates</text>
          </g>
        </svg>
      </div>

      <ol class="mt-10 grid gap-5 md:grid-cols-3">
        <li v-for="(s, i) in steps" :key="s.title" v-reveal="i * 120"
            class="group relative rounded-card bg-marble p-7 ring-1 ring-ink/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(4,68,148,0.3)]">
          <span class="absolute top-6 left-7 font-serif text-5xl font-bold text-brand-100 transition-colors duration-500 group-hover:text-brand-200">0{{ i + 1 }}</span>
          <span class="grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-500 group-hover:bg-brand-700 group-hover:text-white">
            <component :is="s.icon" :size="26" />
          </span>
          <h3 class="t-h3 mt-6">{{ s.title }}</h3>
          <p class="mt-2 leading-relaxed text-ink-soft">{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.route-line {
  clip-path: inset(0 0 0 100%);
  transition: clip-path 2.2s var(--ease-in-out-quint);
  animation: flow 1.2s linear infinite;
}
.drawn .route-line { clip-path: inset(0 0 0 0); }
@keyframes flow { to { stroke-dashoffset: -44; } }

.pin-pulse { transform-box: fill-box; transform-origin: center; animation: pulse 2.4s ease-out infinite; }
@keyframes pulse {
  0% { transform: scale(0.6); opacity: 0.9; }
  100% { transform: scale(1.6); opacity: 0; }
}
</style>
