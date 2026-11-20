<script setup>
import SiteBrand from './SiteBrand.vue'
import BrandIcon from './BrandIcon.vue'
import { nav, categories, phones, waLink, instagram, hours, location } from '../data'
</script>

<template>
  <footer class="relative overflow-hidden bg-brand-900 pt-16 pb-8 text-white/70">
    <span class="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 font-serif text-[18vw] leading-none font-bold text-white/[0.03] select-none" aria-hidden="true">OPRA</span>

    <div class="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div>
        <SiteBrand dark />
        <p class="mt-6 max-w-sm leading-relaxed">معرض أوبرا لمستلزمات الحمامات والمغاسل والاكسسوارات. جودة عالية .. تصميم راقي.</p>
        <div class="mt-6 flex gap-3">
          <a :href="instagram" target="_blank" rel="noopener" aria-label="Instagram" class="grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-brand-700"><BrandIcon name="instagram" /></a>
          <a :href="waLink()" target="_blank" rel="noopener" aria-label="WhatsApp" class="grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-wa"><BrandIcon name="whatsapp" /></a>
        </div>
      </div>

      <div>
        <h3 class="font-bold text-white">روابط سريعة</h3>
        <ul class="mt-5 space-y-3">
          <li v-for="l in nav" :key="l.to"><router-link :to="l.to" class="transition-colors hover:text-white">{{ l.label }}</router-link></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-white">الأقسام</h3>
        <ul class="mt-5 space-y-3">
          <li v-for="c in categories" :key="c.slug"><router-link :to="{ path: '/gallery', query: { cat: c.slug } }" class="transition-colors hover:text-white">{{ c.title }}</router-link></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold text-white">تواصل معنا</h3>
        <ul class="mt-5 space-y-3">
          <li v-for="p in phones" :key="p.tel"><a :href="`tel:${p.tel}`" dir="ltr" class="transition-colors hover:text-white">{{ p.label }}</a></li>
          <li>{{ hours }}</li>
          <li><a :href="location.url" target="_blank" rel="noopener" class="transition-colors hover:text-white">{{ location.city }} — الموقع على الخريطة</a></li>
          <li><a :href="instagram" target="_blank" rel="noopener" dir="ltr" class="transition-colors hover:text-white">@alanjaz_alasry</a></li>
        </ul>
      </div>
    </div>

    <div class="relative mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-5 pt-6 text-sm sm:flex-row sm:px-8">
      <p>© {{ new Date().getFullYear() }} الإنجاز العصري. جميع الحقوق محفوظة.</p>
      <p class="font-serif tracking-[0.2em] italic">OPRA · BATHROOM CABINET</p>
    </div>
  </footer>
</template>
