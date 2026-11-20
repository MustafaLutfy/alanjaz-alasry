<script setup>
import BrandIcon from './BrandIcon.vue'
import { instagram } from '../data'

const shots = [
  { src: '/images/vanity-led.jpg', alt: 'كابينة بإضاءة LED', tall: true },
  { src: '/images/towel-rack.jpg', alt: 'حمّالة مناشف كروم' },
  { src: '/images/bathroom-grey.jpg', alt: 'حمام رمادي عصري', tall: true },
  { src: '/images/mirror-round.jpg', alt: 'مرآة دائرية' },
  { src: '/images/toilet-wall.jpg', alt: 'مرحاض معلق', tall: true },
  { src: '/images/vanity-white.jpg', alt: 'كابينة بيضاء' },
  { src: '/images/basin-black.jpg', alt: 'مغسلة سوداء' },
  { src: '/images/towel-shelf.jpg', alt: 'رف مناشف', tall: true },
]
</script>

<template>
  <section id="gallery" class="bg-marble py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p v-reveal class="font-serif text-lg tracking-[0.25em] text-brand-600 uppercase italic">Showroom</p>
          <h2 v-reveal="100" class="mt-3 text-4xl leading-tight font-bold sm:text-5xl">لمحات من معرضنا</h2>
        </div>
        <a v-reveal="200" :href="instagram" target="_blank" rel="noopener"
           class="group inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white px-6 py-3.5 font-semibold transition-all hover:border-transparent hover:bg-gradient-to-l hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white">
          <BrandIcon name="instagram" :size="20" />
          <span dir="ltr">@alanjaz_alasry</span>
        </a>
      </div>

      <div class="mt-12 columns-2 gap-4 sm:gap-5 lg:columns-4">
        <a v-for="(s, i) in shots" :key="s.src" v-reveal="(i % 4) * 90" :href="instagram" target="_blank" rel="noopener"
           class="group relative mb-4 block overflow-hidden rounded-3xl break-inside-avoid sm:mb-5">
          <img :src="s.src" :alt="s.alt" loading="lazy"
               class="w-full object-cover transition-transform duration-[1.2s] ease-(--ease-out-expo) group-hover:scale-110"
               :class="s.tall ? 'aspect-[3/4]' : 'aspect-square'" />
          <div class="absolute inset-0 grid place-items-center bg-brand-900/0 transition-colors duration-500 group-hover:bg-brand-900/45">
            <span class="grid size-14 scale-50 place-items-center rounded-full bg-white text-brand-700 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
              <BrandIcon name="instagram" :size="24" />
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
