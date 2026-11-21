<script setup>
import SiteBrand from './SiteBrand.vue'
import BrandIcon from './BrandIcon.vue'
import { nav, categories, phones, waLink, instagram, socials, agencies, hours, location } from '../data'
</script>

<template>
  <footer class="relative overflow-hidden bg-brand-900 pt-20 text-white/65">
    <div class="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
      <div>
        <SiteBrand dark />
        <p class="mt-6 max-w-sm leading-relaxed">معرض أوبرا لمستلزمات الحمامات والمغاسل والاكسسوارات. جودة عالية .. تصميم راقي.</p>
        <div class="mt-6 flex gap-2.5">
          <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank" rel="noopener" :aria-label="s.label" class="grid size-11 place-items-center rounded-full bg-white/[0.07] text-white ring-1 ring-white/15 transition-colors hover:bg-white hover:text-brand-700"><BrandIcon :name="s.name" /></a>
          <a :href="waLink()" target="_blank" rel="noopener" aria-label="واتساب" class="grid size-11 place-items-center rounded-full bg-white/[0.07] text-white ring-1 ring-white/15 transition-colors hover:bg-white hover:text-brand-700"><BrandIcon name="whatsapp" /></a>
        </div>
      </div>

      <div>
        <h3 class="text-sm font-bold text-glow">روابط سريعة</h3>
        <ul class="mt-5 space-y-3">
          <li v-for="l in nav" :key="l.to"><router-link :to="l.to" class="transition-colors hover:text-white">{{ l.label }}</router-link></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-bold text-glow">الأقسام</h3>
        <ul class="mt-5 space-y-3">
          <li v-for="c in categories" :key="c.slug"><router-link :to="{ path: '/gallery', query: { cat: c.slug } }" class="transition-colors hover:text-white">{{ c.title }}</router-link></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-bold text-glow">تواصل معنا</h3>
        <ul class="mt-5 space-y-3">
          <li v-for="p in phones" :key="p.tel"><a :href="`tel:${p.tel}`" dir="ltr" class="transition-colors hover:text-white">{{ p.label }}</a></li>
          <li>{{ hours }}</li>
          <li><a :href="location.url" target="_blank" rel="noopener" class="transition-colors hover:text-white">{{ location.city }} — الموقع على الخريطة</a></li>
          <li><a :href="instagram" target="_blank" rel="noopener" dir="ltr" class="transition-colors hover:text-white">@alanjaz_alasry</a></li>
        </ul>
      </div>
    </div>

    <!-- oversized wordmark -->
    <p class="pointer-events-none relative mt-16 text-center text-[11vw] leading-[0.95] font-extrabold whitespace-nowrap text-white/[0.06] select-none xl:text-[10.5rem]" aria-hidden="true">الإنجاز العصري</p>

    <div class="relative border-t border-white/10">
      <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm sm:flex-row sm:px-8">
        <p>© {{ new Date().getFullYear() }} الإنجاز العصري. جميع الحقوق محفوظة.</p>
        <p class="font-serif tracking-[0.2em]" dir="ltr">{{ agencies.join(' · ') }}</p>
      </div>
    </div>
  </footer>
</template>
