<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Info } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import ContactSection from '../components/ContactSection.vue'
import BrandIcon from '../components/BrandIcon.vue'
import { showcase, categories, categoryBy, waLink } from '../data'

const route = useRoute()
const router = useRouter()
const active = computed(() => (categories.some((c) => c.slug === route.query.cat) ? route.query.cat : 'all'))
const list = computed(() => (active.value === 'all' ? showcase : showcase.filter((s) => s.cat === active.value)))
const tabs = [
  { slug: 'all', title: 'الكل', count: showcase.length },
  ...categories.map((c) => ({ slug: c.slug, title: c.title, count: showcase.filter((s) => s.cat === c.slug).length })),
]
const setCat = (slug) => router.replace({ query: slug === 'all' ? {} : { cat: slug } })
</script>

<template>
  <main>
    <PageHero title="معرض" accent="التصاميم" eyebrow="Gallery" :crumbs="[{ label: 'المعرض' }]">
      أفكار وتصاميم حمامات من أجواء OPRA — للإلهام وتساعدك تتخيّل حمامك الجديد.
    </PageHero>

    <section class="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div v-reveal class="-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="تصنيف الصور">
        <button v-for="t in tabs" :key="t.slug" role="tab" :aria-selected="active === t.slug"
                class="flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-[15px] font-medium transition-all duration-300"
                :class="active === t.slug ? 'border-brand-700 bg-brand-700 text-white shadow-lg shadow-brand-700/25' : 'border-stone bg-white/70 text-ink-soft hover:border-brand-200 hover:text-brand-700'"
                @click="setCat(t.slug)">
          {{ t.title }}
          <span class="grid min-w-6 place-items-center rounded-full px-1.5 font-serif text-sm"
                :class="active === t.slug ? 'bg-white/20' : 'bg-brand-50 text-brand-700'">{{ t.count }}</span>
        </button>
      </div>

      <p v-reveal="80" class="mt-6 flex items-start gap-2.5 rounded-2xl bg-brand-50 px-5 py-4 text-sm leading-relaxed text-ink-soft">
        <Info :size="18" class="mt-0.5 shrink-0 text-brand-700" />
        الصور للعرض فقط ولا تمثّل المخزون الحالي — التشكيلة المتوفرة تتغير باستمرار، راسلنا لمعرفة المتوفر.
      </p>

      <TransitionGroup name="grid" tag="div" class="relative mt-10 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3">
        <figure v-for="s in list" :key="s.img" class="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone">
          <img :src="s.img" :alt="`${categoryBy(s.cat).title} — صورة للعرض`" loading="lazy"
               class="size-full object-cover transition-transform duration-[1.2s] ease-(--ease-out-expo) group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100"></div>
          <figcaption class="absolute right-4 bottom-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-brand-700 backdrop-blur">{{ categoryBy(s.cat).title }}</figcaption>
        </figure>
      </TransitionGroup>

      <div v-reveal class="relative mt-16 flex flex-col items-start gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
        <div class="relative">
          <h2 class="text-2xl font-bold sm:text-3xl">تبي تعرف المتوفر حالياً؟</h2>
          <p class="mt-2 text-white/75">ابعثلنا صورة التصميم اللي عجبك ونخبرك بالأقرب له بالمعرض.</p>
        </div>
        <a :href="waLink('مرحباً، أريد أعرف المتوفر حالياً')" target="_blank" rel="noopener"
           class="relative inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-7 py-4 font-semibold text-brand-700 transition-transform hover:-translate-y-0.5">
          <BrandIcon name="whatsapp" :size="20" class="text-wa" /> راسلنا
        </a>
        <svg class="pointer-events-none absolute -bottom-4 left-0 w-full text-white/10" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30 Q50 0 100 30 T200 30 T300 30 T400 30" fill="none" stroke="currentColor" stroke-width="8" />
        </svg>
      </div>
    </section>

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
