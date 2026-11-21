<script setup>
import { ChevronLeft } from '@lucide/vue'
import Eyebrow from './Eyebrow.vue'
import Accent from './Accent.vue'
// crumbs: [{ label, to? }] — "الرئيسية" is prepended automatically
defineProps({
  title: { type: String, required: true },
  accent: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  crumbs: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="surface-marble relative overflow-hidden pt-36 pb-14 sm:pt-40 lg:pb-20">
    <span class="pointer-events-none absolute -bottom-10 left-4 font-serif text-[8rem] leading-none font-bold text-brand-700/[0.05] select-none sm:text-[12rem]" aria-hidden="true">OPRA</span>

    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <nav v-reveal aria-label="مسار التنقل" class="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
        <router-link to="/" class="transition-colors hover:text-brand-700">الرئيسية</router-link>
        <template v-for="c in crumbs" :key="c.label">
          <ChevronLeft :size="14" class="text-sand" />
          <router-link v-if="c.to" :to="c.to" class="transition-colors hover:text-brand-700">{{ c.label }}</router-link>
          <span v-else class="font-medium text-brand-700" aria-current="page">{{ c.label }}</span>
        </template>
      </nav>

      <div v-reveal="80" class="mt-10">
        <Eyebrow v-if="eyebrow">{{ eyebrow }}</Eyebrow>
        <h1 class="t-h1 mt-4">{{ title }} <Accent v-if="accent">{{ accent }}</Accent></h1>
      </div>
      <p v-reveal="180" class="t-lead mt-6 max-w-2xl text-ink-soft"><slot /></p>
    </div>
  </section>
</template>
