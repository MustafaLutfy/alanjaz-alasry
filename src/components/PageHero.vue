<script setup>
import { ChevronLeft } from '@lucide/vue'
// crumbs: [{ label, to? }] — "الرئيسية" is prepended automatically
defineProps({
  title: { type: String, required: true },
  accent: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  crumbs: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="bg-marble relative overflow-hidden pt-32 pb-14 sm:pt-36 lg:pb-20">
    <div class="pointer-events-none absolute -top-40 left-[-10%] size-[560px] rounded-full bg-brand-400/15 blur-[120px]"></div>
    <div class="pointer-events-none absolute right-[-5%] -bottom-40 size-[420px] rounded-full bg-glow/30 blur-[120px]"></div>
    <span class="pointer-events-none absolute -bottom-8 left-4 font-serif text-[8rem] leading-none font-bold text-brand-700/[0.05] select-none sm:text-[11rem]" aria-hidden="true">OPRA</span>

    <div class="relative mx-auto max-w-7xl px-5 sm:px-8">
      <nav v-reveal aria-label="مسار التنقل" class="flex flex-wrap items-center gap-1.5 text-sm text-ink-soft">
        <router-link to="/" class="transition-colors hover:text-brand-700">الرئيسية</router-link>
        <template v-for="c in crumbs" :key="c.label">
          <ChevronLeft :size="14" class="text-sand" />
          <router-link v-if="c.to" :to="c.to" class="transition-colors hover:text-brand-700">{{ c.label }}</router-link>
          <span v-else class="font-medium text-brand-700" aria-current="page">{{ c.label }}</span>
        </template>
      </nav>

      <p v-if="eyebrow" v-reveal="60" class="mt-8 font-serif text-lg tracking-[0.25em] text-brand-600 uppercase italic">{{ eyebrow }}</p>
      <h1 v-reveal="100" class="mt-3 text-5xl leading-[1.1] font-extrabold tracking-tight sm:text-6xl lg:text-7xl" :class="!eyebrow && 'mt-8'">
        {{ title }} <span v-if="accent" class="text-gradient">{{ accent }}</span>
      </h1>
      <p v-reveal="200" class="mt-6 max-w-2xl text-lg leading-loose text-ink-soft"><slot /></p>
    </div>
  </section>
</template>
