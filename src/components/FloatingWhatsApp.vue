<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BrandIcon from './BrandIcon.vue'
import { waLink } from '../data'

const show = ref(false)
const onScroll = () => (show.value = scrollY > 500)
onMounted(() => addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="fab">
    <a v-if="show" :href="waLink()" target="_blank" rel="noopener" aria-label="راسلنا على واتساب"
       class="group fixed bottom-5 left-5 z-40 flex h-14 items-center overflow-hidden rounded-full bg-wa text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)]">
      <span class="grid size-14 shrink-0 place-items-center"><BrandIcon name="whatsapp" :size="26" /></span>
      <span class="max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap transition-all duration-500 ease-out-expo group-hover:max-w-40 group-hover:ps-1 group-hover:pe-5">راسلنا على واتساب</span>
    </a>
  </Transition>
</template>

<style scoped>
.fab-enter-active, .fab-leave-active { transition: opacity .4s, transform .5s var(--ease-out-expo); }
.fab-enter-from, .fab-leave-to { opacity: 0; transform: translateY(16px) scale(0.9); }
</style>
