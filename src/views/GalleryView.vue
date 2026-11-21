<script setup>
import { ref, computed, nextTick, watch, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Info, X, ChevronLeft, ChevronRight } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import ContactSection from '../components/ContactSection.vue'
import Btn from '../components/Btn.vue'
import BrandIcon from '../components/BrandIcon.vue'
import { showcase, galleryCats, categoryBy, waLink } from '../data'

const route = useRoute()
const router = useRouter()
const active = computed(() => (galleryCats.some((c) => c.slug === route.query.cat) ? route.query.cat : 'all'))
const list = computed(() => (active.value === 'all' ? showcase : showcase.filter((s) => s.cat === active.value)))
const tabs = [
  { slug: 'all', title: 'الكل', count: showcase.length },
  ...galleryCats.map((c) => ({ slug: c.slug, title: c.title, count: showcase.filter((s) => s.cat === c.slug).length })),
]
const setCat = (slug) => router.replace({ query: slug === 'all' ? {} : { cat: slug } })

// Lightbox. With the View Transitions API the photo morphs from its grid slot into the viewer and back.
const open = ref(-1)
const named = ref(-1) // grid item carrying the shared view-transition-name
const current = computed(() => list.value[open.value])
function transition(fn) {
  if (!document.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) return fn()
  return document.startViewTransition(async () => { fn(); await nextTick() }).finished
}
async function show(i) {
  named.value = i
  await nextTick()
  transition(() => (open.value = i))
}
const close = () => transition(() => (open.value = -1))
const step = (d) => {
  const i = (open.value + d + list.value.length) % list.value.length
  named.value = i
  transition(() => (open.value = i))
}
function onKey(e) {
  if (open.value < 0) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') step(1) // RTL: left = next
  if (e.key === 'ArrowRight') step(-1)
}
watch(open, (v) => {
  document.documentElement.style.overflow = v >= 0 ? 'hidden' : ''
  v >= 0 ? addEventListener('keydown', onKey) : removeEventListener('keydown', onKey)
})
onUnmounted(() => { document.documentElement.style.overflow = ''; removeEventListener('keydown', onKey) })
</script>

<template>
  <main>
    <PageHero title="معرض" accent="التصاميم" eyebrow="معرضنا" :crumbs="[{ label: 'المعرض' }]">
      أفكار وتصاميم حمامات من أجواء OPRA — للإلهام، وتساعدك تتخيّل حمامك الجديد.
    </PageHero>

    <section class="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div v-reveal class="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="تصنيف الصور">
        <button v-for="t in tabs" :key="t.slug" role="tab" :aria-selected="active === t.slug"
                class="flex h-11 shrink-0 items-center gap-2 rounded-full ps-5 pe-2 text-[15px] font-medium transition-all duration-300"
                :class="active === t.slug ? 'bg-brand-700 text-white shadow-[0_12px_28px_-12px_rgba(4,68,148,0.6)]' : 'bg-white/75 text-ink-soft ring-1 ring-ink/[0.08] hover:text-brand-700'"
                @click="setCat(t.slug)">
          {{ t.title }}
          <span class="grid size-7 place-items-center rounded-full font-serif text-sm" :class="active === t.slug ? 'bg-white/20' : 'bg-brand-700/[0.07] text-brand-700'">{{ t.count }}</span>
        </button>
      </div>

      <p v-reveal="80" class="mt-6 flex items-start gap-2.5 rounded-card bg-brand-700/[0.05] px-5 py-4 text-sm leading-relaxed text-ink-soft">
        <Info :size="18" class="mt-0.5 shrink-0 text-brand-700" />
        الصور للعرض فقط ولا تمثّل المخزون الحالي — التشكيلة المتوفرة تتغير باستمرار، راسلنا لمعرفة المتوفر.
      </p>

      <TransitionGroup name="grid" tag="div" class="relative mt-10 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <button v-for="(s, i) in list" :key="s.img" v-water type="button" data-cursor="عرض" @click="show(i)"
                class="group relative aspect-[4/5] overflow-hidden rounded-media bg-stone text-start">
          <img :src="s.img" :alt="`${categoryBy(s.cat).title} — صورة للعرض`" loading="lazy"
               class="size-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
               :style="{ viewTransitionName: named === i && open < 0 ? 'gallery-photo' : 'none' }" />
          <span class="absolute inset-0 bg-gradient-to-t from-brand-900/55 via-transparent to-transparent"></span>
          <span class="glass absolute right-4 bottom-4 rounded-full px-4 py-1.5 text-sm font-semibold text-brand-700">{{ categoryBy(s.cat).title }}</span>
        </button>
      </TransitionGroup>

      <div v-reveal class="relative mt-16 flex flex-col items-start gap-6 overflow-hidden rounded-media bg-brand-700 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div class="relative">
          <h2 class="t-h3 !text-2xl sm:!text-3xl">تبي تعرف المتوفر حالياً؟</h2>
          <p class="mt-2 text-white/75">ابعثلنا صورة التصميم اللي عجبك ونخبرك بالأقرب له بالمعرض.</p>
        </div>
        <Btn :href="waLink('مرحباً، أريد أعرف المتوفر حالياً')" variant="light" class="relative shrink-0">
          راسلنا
          <template #icon><BrandIcon name="whatsapp" :size="18" /></template>
        </Btn>
        <svg class="pointer-events-none absolute -bottom-4 left-0 w-full text-white/10" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30 Q50 0 100 30 T200 30 T300 30 T400 30" fill="none" stroke="currentColor" stroke-width="8" />
        </svg>
      </div>
    </section>

    <!-- lightbox -->
    <Teleport to="body">
      <div v-if="current" class="fixed inset-0 z-[85] flex items-center justify-center bg-brand-900/92 p-4 backdrop-blur-md sm:p-10"
           role="dialog" aria-modal="true" aria-label="عرض الصورة" @click.self="close">
        <figure class="relative">
          <img :src="current.img" :alt="`${categoryBy(current.cat).title} — صورة للعرض`"
               class="h-auto max-h-[78vh] w-[min(88vw,560px)] rounded-media object-cover shadow-2xl" style="view-transition-name: gallery-photo" />
          <figcaption class="mt-4 flex items-center justify-between gap-4 text-white">
            <span class="font-semibold">{{ categoryBy(current.cat).title }}</span>
            <span class="text-sm text-white/55">{{ current.cat === 'showroom' ? 'صورة حقيقية من المعرض' : 'صورة للعرض' }} · {{ open + 1 }} / {{ list.length }}</span>
          </figcaption>
        </figure>
        <button class="absolute top-5 left-5 grid size-12 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white hover:text-brand-700" aria-label="إغلاق" @click="close"><X :size="22" /></button>
        <button class="absolute top-1/2 right-3 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white hover:text-brand-700 sm:right-6" aria-label="السابق" @click="step(-1)"><ChevronRight :size="22" /></button>
        <button class="absolute top-1/2 left-3 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white hover:text-brand-700 sm:left-6" aria-label="التالي" @click="step(1)"><ChevronLeft :size="22" /></button>
      </div>
    </Teleport>

    <ContactSection />
  </main>
</template>

<style scoped>
.grid-move { transition: transform .7s var(--ease-out-expo); }
.grid-enter-active { transition: opacity .5s ease .1s, transform .7s var(--ease-out-expo) .1s; }
.grid-leave-active { transition: opacity .2s ease; position: absolute; visibility: hidden; }
.grid-enter-from { opacity: 0; transform: translateY(24px) scale(0.97); }
.grid-leave-to { opacity: 0; }
</style>

<style>
::view-transition-group(gallery-photo) { animation-duration: .6s; animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }
</style>
