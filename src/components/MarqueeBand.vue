<script setup>
const items = ['كابينات الحمام', 'مرايا LED', 'المغاسل', 'الخلاطات', 'الشاورات', 'المراحيض المعلقة', 'الاكسسوارات', 'جودة عالية', 'تصميم راقي']
</script>

<template>
  <!-- Track is two identical copies; translating 50% loops seamlessly -->
  <div class="relative overflow-hidden bg-brand-700 py-5 text-white sm:py-6" aria-hidden="true">
    <div class="flex w-max animate-marquee hover:[animation-play-state:paused]">
      <ul v-for="n in 2" :key="n" class="flex shrink-0 items-center">
        <li v-for="t in items" :key="t" class="flex items-center gap-8 px-8 text-xl font-semibold whitespace-nowrap sm:text-2xl">
          {{ t }}
          <svg class="size-5 text-glow" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0Z" /></svg>
        </li>
      </ul>
    </div>
  </div>
</template>
