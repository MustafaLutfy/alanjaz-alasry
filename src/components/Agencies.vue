<script setup>
import Eyebrow from './Eyebrow.vue'
import Accent from './Accent.vue'
import { agencies } from '../data'
</script>

<template>
  <section class="section-y bg-white">
    <div class="mx-auto max-w-7xl px-5 sm:px-8">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div v-reveal>
          <Eyebrow>وكالاتنا التجارية</Eyebrow>
          <h2 class="t-h2 mt-4">أربع علامات..<br /><Accent>معرض واحد.</Accent></h2>
        </div>
        <p v-reveal="120" class="t-lead max-w-md text-ink-soft">نجمع لك تشكيلات وكالاتنا التجارية تحت سقف واحد في بغداد — تشوفها وتلمسها قبل ما تختار.</p>
      </div>

      <!-- wordmarks set in the serif (no official logos for all four); fill sweeps up on hover like the buttons -->
      <ul class="mt-14 grid grid-cols-2 overflow-hidden rounded-card ring-1 ring-ink/[0.08] lg:grid-cols-4">
        <li v-for="(a, i) in agencies" :key="a" v-reveal="i * 90"
            class="group relative grid h-36 place-items-center border-ink/[0.08] sm:h-44 [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0 [&:nth-child(odd)]:border-e lg:[&:not(:last-child)]:border-e">
          <span class="absolute inset-0 origin-bottom scale-y-0 bg-brand-700 transition-transform duration-700 ease-out-expo group-hover:scale-y-100"></span>
          <span class="absolute top-4 start-5 font-serif text-sm text-ink/30 lining-nums transition-colors duration-500 group-hover:text-white/50">0{{ i + 1 }}</span>
          <span class="relative font-serif text-2xl font-bold tracking-[0.12em] text-ink/75 transition-colors duration-500 group-hover:text-white sm:text-4xl sm:tracking-[0.18em]" dir="ltr">{{ a }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
