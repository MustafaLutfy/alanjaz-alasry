<script setup>
// Animated water waves echoing the wave in the OPRA logo. Path period = 1440, svg = 2 periods, so -50% loops seamlessly.
defineProps({ color: { type: String, default: 'var(--color-brand-700)' } })
const d = 'M0 60 Q360 0 720 60 T1440 60 T2160 60 T2880 60 V120 H0Z'
</script>

<template>
  <div class="relative h-16 overflow-hidden pointer-events-none sm:h-24" aria-hidden="true">
    <svg class="absolute bottom-0 left-0 h-full w-[200%] animate-wave opacity-30" viewBox="0 0 2880 120" preserveAspectRatio="none">
      <path :fill="color" :d="d" />
    </svg>
    <svg class="absolute bottom-0 left-0 h-[80%] w-[200%] animate-wave opacity-50 [animation-direction:reverse] [animation-duration:19s]" viewBox="0 0 2880 120" preserveAspectRatio="none">
      <path :fill="color" :d="d" />
    </svg>
    <svg class="absolute bottom-0 left-0 h-[60%] w-[200%] animate-wave [animation-duration:10s]" viewBox="0 0 2880 120" preserveAspectRatio="none">
      <path :fill="color" :d="d" />
    </svg>
  </div>
</template>
