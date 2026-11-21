<script setup>
import { Phone, Clock, MapPin, ArrowLeft } from '@lucide/vue'
import Eyebrow from './Eyebrow.vue'
import Accent from './Accent.vue'
import Btn from './Btn.vue'
import BrandIcon from './BrandIcon.vue'
import WaveDivider from './WaveDivider.vue'
import { phones, waLink, instagram, hours, location } from '../data'
</script>

<template>
  <section id="contact" class="relative">
    <WaveDivider />
    <div class="relative overflow-hidden bg-brand-700 pt-12 pb-24 text-white sm:pt-16 sm:pb-32">
      <div class="pointer-events-none absolute -top-40 left-1/4 size-[520px] rounded-full bg-brand-400/30 blur-[140px]"></div>

      <div class="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <div v-reveal>
            <Eyebrow dark>تواصل معنا</Eyebrow>
            <h2 class="t-h2 mt-4">حمّام أحلامك<br />يبدأ <Accent dark>برسالة.</Accent></h2>
          </div>
          <p v-reveal="150" class="t-lead mt-6 max-w-lg text-white/75">للطلب والاستفسار راسلونا على الخاص أو اتصلوا بنا مباشرة — فريقنا جاهز يساعدك.</p>
          <div v-reveal="250" class="mt-10 flex flex-wrap gap-3">
            <Btn :href="waLink()" variant="light">
              واتساب
              <template #icon><BrandIcon name="whatsapp" :size="18" /></template>
            </Btn>
            <Btn :href="instagram" variant="glass">
              انستغرام
              <template #icon><BrandIcon name="instagram" :size="18" /></template>
            </Btn>
          </div>
        </div>

        <div class="grid gap-3">
          <a v-for="(p, i) in phones" :key="p.tel" v-reveal="i * 110" :href="`tel:${p.tel}`"
             class="group flex items-center justify-between rounded-card bg-white/[0.08] p-5 ring-1 ring-white/15 backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-brand-700 sm:p-6">
            <span class="flex items-center gap-4">
              <span class="grid size-12 place-items-center rounded-2xl bg-white/15 transition-colors group-hover:bg-brand-700 group-hover:text-white"><Phone :size="22" /></span>
              <span>
                <span class="block text-sm opacity-70">اتصل بنا</span>
                <span class="block font-serif text-2xl font-bold sm:text-3xl" dir="ltr">{{ p.label }}</span>
              </span>
            </span>
            <ArrowLeft :size="20" class="opacity-50 transition-transform duration-500 group-hover:-translate-x-1.5 group-hover:opacity-100" />
          </a>
          <div v-reveal="220" class="grid grid-cols-2 gap-3">
            <div class="rounded-card bg-white/[0.05] p-5 ring-1 ring-white/15">
              <Clock :size="22" class="text-glow" />
              <p class="mt-3 text-sm text-white/60">أوقات الدوام</p>
              <p class="mt-1 font-semibold">{{ hours }}</p>
            </div>
            <a :href="location.url" target="_blank" rel="noopener" class="rounded-card bg-white/[0.05] p-5 ring-1 ring-white/15 transition-colors hover:bg-white/[0.12]">
              <MapPin :size="22" class="text-glow" />
              <p class="mt-3 text-sm text-white/60">موقع المعرض</p>
              <p class="mt-1 font-semibold">{{ location.city }} — افتح الخريطة</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
