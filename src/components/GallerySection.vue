<script setup>
import Eyebrow from './Eyebrow.vue'
import Btn from './Btn.vue'
import BrandIcon from './BrandIcon.vue'
import { instagram } from '../data'

const shots = [
  { src: '/images/vanity-led.jpg', tall: true },
  { src: '/images/towel-rack.jpg' },
  { src: '/images/bathroom-grey.jpg', tall: true },
  { src: '/images/mirror-round.jpg' },
  { src: '/images/toilet-wall.jpg', tall: true },
  { src: '/images/vanity-white.jpg' },
  { src: '/images/basin-black.jpg' },
  { src: '/images/towel-shelf.jpg', tall: true },
]
</script>

<template>
  <section id="gallery" class="section-y bg-marble">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div v-reveal>
          <Eyebrow>من انستغرام</Eyebrow>
          <h2 class="t-h2 mt-4">لمحات من معرضنا</h2>
        </div>
        <div v-reveal="150">
          <Btn :href="instagram" variant="outline" size="md">
            <span dir="ltr">@alanjaz_alasry</span>
            <template #icon><BrandIcon name="instagram" :size="16" /></template>
          </Btn>
        </div>
      </div>

      <div class="mt-12 columns-2 gap-4 sm:gap-5 lg:columns-4">
        <a v-for="(s, i) in shots" :key="s.src" v-reveal="(i % 4) * 90" v-water :href="instagram" target="_blank" rel="noopener" data-cursor="انستغرام"
           class="group relative mb-4 block overflow-hidden rounded-card break-inside-avoid sm:mb-5">
          <img :src="s.src" alt="صورة من معرض أوبرا" loading="lazy"
               class="w-full object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-105"
               :class="s.tall ? 'aspect-[3/4]' : 'aspect-square'" />
        </a>
      </div>
    </div>
  </section>
</template>
