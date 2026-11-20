<script setup>
import { Phone, Clock, MapPin } from '@lucide/vue'
import BrandIcon from './BrandIcon.vue'
import WaveDivider from './WaveDivider.vue'
import { phones, waLink, instagram, hours, location } from '../data'
</script>

<template>
  <section id="contact" class="relative">
    <WaveDivider />
    <div class="relative overflow-hidden bg-brand-700 pt-12 pb-24 text-white sm:pt-16 sm:pb-32">
      <div class="pointer-events-none absolute -top-40 left-1/4 size-[520px] rounded-full bg-brand-400/40 blur-[140px]"></div>
      <div class="pointer-events-none absolute -right-20 bottom-0 size-[380px] rounded-full bg-glow/20 blur-[120px]"></div>

      <div class="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p v-reveal class="font-serif text-lg tracking-[0.25em] text-glow uppercase italic">Get in Touch</p>
          <h2 v-reveal="100" class="mt-3 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            حمّام أحلامك<br />يبدأ برسالة.
          </h2>
          <p v-reveal="200" class="mt-6 max-w-lg text-lg leading-loose text-white/75">
            للطلب والاستفسار راسلونا على الخاص أو اتصلوا بنا مباشرة — فريقنا جاهز يساعدك.
          </p>
          <div v-reveal="300" class="mt-9 flex flex-wrap gap-3">
            <a :href="waLink()" target="_blank" rel="noopener"
               class="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 font-semibold text-brand-700 shadow-xl shadow-brand-900/30 transition-transform hover:-translate-y-0.5">
              <BrandIcon name="whatsapp" :size="22" class="text-wa" /> واتساب
            </a>
            <a :href="instagram" target="_blank" rel="noopener"
               class="inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-4 font-semibold transition-colors hover:bg-white/10">
              <BrandIcon name="instagram" :size="20" /> انستغرام
            </a>
          </div>
        </div>

        <div class="grid gap-4">
          <a v-for="(p, i) in phones" :key="p.tel" v-reveal="i * 120" :href="`tel:${p.tel}`"
             class="group flex items-center justify-between rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-brand-700 sm:p-6">
            <div class="flex items-center gap-4">
              <span class="grid size-12 place-items-center rounded-2xl bg-white/15 transition-colors group-hover:bg-brand-700 group-hover:text-white"><Phone :size="22" /></span>
              <div>
                <p class="text-sm opacity-70">اتصل بنا</p>
                <p class="font-serif text-2xl font-bold tracking-wide sm:text-3xl" dir="ltr">{{ p.label }}</p>
              </div>
            </div>
          </a>
          <div v-reveal="240" class="grid grid-cols-2 gap-4">
            <div class="rounded-3xl border border-white/15 bg-white/5 p-5">
              <Clock :size="22" class="text-glow" />
              <p class="mt-3 text-sm text-white/60">أوقات الدوام</p>
              <p class="mt-1 font-semibold">{{ hours }}</p>
            </div>
            <a :href="location.url" target="_blank" rel="noopener" class="rounded-3xl border border-white/15 bg-white/5 p-5 transition-colors hover:bg-white/15">
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
