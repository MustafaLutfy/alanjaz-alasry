<script setup>
// Section label: the OPRA wave as a mark + a short Arabic label
defineProps({ dark: Boolean })
</script>

<template>
  <p class="inline-flex items-center gap-2.5 text-sm font-semibold" :class="dark ? 'text-glow' : 'text-brand-700'">
    <svg class="h-2.5 w-7 shrink-0" viewBox="0 0 28 10" fill="none" aria-hidden="true">
      <path d="M1 5c3.2-4 6.4-4 9.6 0s6.4 4 9.6 0S26 1 27 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    </svg>
    <slot />
  </p>
</template>
