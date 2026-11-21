<script setup>
// Highlighted words with a hand-drawn wave underline (the OPRA logo wave). Draws when its block is revealed.
defineProps({ dark: Boolean })
</script>

<template>
  <span class="relative inline-block whitespace-nowrap" :class="dark ? 'text-glow' : 'text-brand-700'">
    <slot />
    <svg class="accent-wave pointer-events-none absolute inset-x-0 -bottom-[0.14em] h-[0.3em] w-full overflow-visible opacity-70" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength="1" d="M198 9 C172 1 150 1 126 10 S76 19 52 9 S12 3 2 10" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" />
    </svg>
  </span>
</template>
