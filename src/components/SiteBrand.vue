<script setup>
// Logo lockup: OPRA mark | company name — reads as the site's name
defineProps({ dark: Boolean })
</script>

<template>
  <router-link to="/" class="flex shrink-0 items-center gap-3 sm:gap-3.5" aria-label="الإنجاز العصري — الصفحة الرئيسية">
    <img :src="dark ? '/opra-logo-white.png' : '/opra-logo.png'" alt="OPRA Bathroom Cabinet" class="h-10 w-auto sm:h-12" />
    <span class="h-9 w-px sm:h-10" :class="dark ? 'bg-white/20' : 'bg-brand-200'"></span>
    <span class="leading-none">
      <span class="block text-lg font-extrabold sm:text-[1.35rem]" :class="dark ? 'text-white' : 'text-brand-700'">الإنجاز العصري</span>
      <span class="mt-1.5 block font-serif text-[0.68rem] font-bold tracking-[0.28em] uppercase sm:text-[0.72rem]" :class="dark ? 'text-white/55' : 'text-ink-soft'">Alanjaz Alasry</span>
    </span>
  </router-link>
</template>
