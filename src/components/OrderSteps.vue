<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Images, MessageCircle, PackageCheck, Truck } from '@lucide/vue'
import Eyebrow from './Eyebrow.vue'
import Accent from './Accent.vue'
import Btn from './Btn.vue'
import BrandIcon from './BrandIcon.vue'
import { waLink } from '../data'

const steps = [
  { icon: Images, title: 'اختار التصميم', text: 'تصفّح معرضنا هنا أو على انستغرام، أو زورنا بالمعرض في بغداد.', tone: 'bg-white text-ink' },
  { icon: MessageCircle, title: 'راسلنا', text: 'ابعث صورة التصميم اللي عجبك على واتساب ونخبرك بالمتوفر والسعر.', tone: 'bg-stone text-ink' },
  { icon: PackageCheck, title: 'نجهّز طلبك', text: 'نفحص القطعة ونغلّفها تغليف آمن قبل ما تطلع من المعرض.', tone: 'bg-brand-700 text-white' },
  { icon: Truck, title: 'توصل لبابك', text: 'نوصل لجميع المحافظات بسهولة وأمان والتزام بالوقت.', tone: 'bg-brand-900 text-white' },
]

// Cards are sticky and stack; each one shrinks and dims as the next slides over it.
const cards = ref([])
function update() {
  cards.value.forEach((c, i) => {
    const next = cards.value[i + 1]
    if (!next) return
    const a = c.getBoundingClientRect()
    const b = next.getBoundingClientRect()
    const k = Math.min(Math.max((a.bottom - b.top) / a.height, 0), 1)
    c.style.transform = `scale(${1 - k * 0.06})`
    c.style.filter = `brightness(${1 - k * 0.12})`
  })
}
onMounted(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  update()
  addEventListener('scroll', update, { passive: true })
})
onUnmounted(() => removeEventListener('scroll', update))
</script>

<template>
  <section class="section-y bg-marble">
    <div class="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <div class="lg:sticky lg:top-32 lg:self-start">
        <div v-reveal>
          <Eyebrow>طريقة الطلب</Eyebrow>
          <h2 class="t-h2 mt-4">شلون <Accent>تطلب؟</Accent></h2>
        </div>
        <p v-reveal="120" class="t-lead mt-6 max-w-md text-ink-soft">أربع خطوات بسيطة — من اختيار التصميم لحد ما توصل القطعة باب بيتك.</p>
        <div v-reveal="220" class="mt-9">
          <Btn :href="waLink('مرحباً، أريد أطلب')">
            ابدأ على واتساب
            <template #icon><BrandIcon name="whatsapp" :size="18" /></template>
          </Btn>
        </div>
      </div>

      <ol class="flex flex-col gap-6 pb-6">
        <li v-for="(s, i) in steps" :key="s.title" :ref="(el) => (cards[i] = el)"
            class="sticky origin-top rounded-media p-8 shadow-[0_30px_60px_-30px_rgba(7,31,68,0.35)] ring-1 ring-ink/[0.05] will-change-transform sm:p-10"
            :class="s.tone" :style="{ top: `calc(7rem + ${i * 1.5}rem)` }">
          <div class="flex items-start justify-between gap-6">
            <span class="font-serif text-7xl leading-none font-semibold opacity-25 sm:text-8xl">0{{ i + 1 }}</span>
            <span class="grid size-16 place-items-center rounded-full ring-1" :class="i > 1 ? 'bg-white/10 ring-white/20' : 'bg-brand-700/[0.07] text-brand-700 ring-brand-700/10'">
              <component :is="s.icon" :size="28" :stroke-width="1.6" />
            </span>
          </div>
          <h3 class="mt-12 text-3xl font-bold sm:text-4xl">{{ s.title }}</h3>
          <p class="t-lead mt-3 max-w-md" :class="i > 1 ? 'text-white/70' : 'text-ink-soft'">{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
