<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Phone, Menu, X } from '@lucide/vue'
import SiteBrand from './SiteBrand.vue'
import Btn from './Btn.vue'
import { nav, phones } from '../data'

const route = useRoute()
const scrolled = ref(false)
const hidden = ref(false)
const open = ref(false)
let lastY = 0
const isActive = (to) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

function onScroll() {
  const y = scrollY
  scrolled.value = y > 30
  hidden.value = y > 500 && y > lastY && !open.value // hide while scrolling down, reveal on scroll up
  lastY = y
}
onMounted(() => addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => removeEventListener('scroll', onScroll))
watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo"
          :class="[hidden ? '-translate-y-full' : 'translate-y-0', scrolled || open ? 'pt-3' : 'pt-4 sm:pt-6']">
    <div class="mx-3 flex max-w-7xl items-center justify-between gap-6 rounded-full py-2 ps-5 pe-2 transition-all duration-500 xl:mx-auto"
         :class="scrolled || open ? 'glass' : ''">
      <SiteBrand />

      <nav class="hidden items-center gap-1 lg:flex" aria-label="القائمة الرئيسية">
        <router-link v-for="l in nav" :key="l.to" :to="l.to"
                     class="relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-300"
                     :class="isActive(l.to) ? 'bg-brand-700/[0.07] text-brand-700' : 'text-ink/75 hover:text-brand-700'">
          {{ l.label }}
        </router-link>
      </nav>

      <div class="flex items-center gap-2">
        <Btn :href="`tel:${phones[0].tel}`" size="md" :icon="Phone" class="hidden sm:inline-flex">اتصل الآن</Btn>
        <button class="grid size-12 place-items-center rounded-full text-brand-700 transition-colors hover:bg-brand-700/[0.07] lg:hidden"
                :aria-label="open ? 'إغلاق القائمة' : 'فتح القائمة'" :aria-expanded="open" @click="open = !open">
          <X v-if="open" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav v-if="open" class="glass mx-3 mt-2 rounded-card p-3 lg:hidden">
        <router-link v-for="(l, i) in nav" :key="l.to" :to="l.to" :style="{ '--i': i }"
                     class="menu-item flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold"
                     :class="isActive(l.to) ? 'bg-brand-700/[0.07] text-brand-700' : 'text-ink'">
          {{ l.label }}
          <span class="font-serif text-sm text-brand-400">0{{ i + 1 }}</span>
        </router-link>
        <Btn :href="`tel:${phones[0].tel}`" :icon="Phone" class="menu-item mt-2 w-full" :style="{ '--i': nav.length }">
          <span dir="ltr">{{ phones[0].label }}</span>
        </Btn>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active, .menu-leave-active { transition: opacity 0.3s, transform 0.45s var(--ease-out-expo); }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-10px) scale(0.98); }
.menu-enter-active .menu-item { animation: item-in 0.55s var(--ease-out-expo) both; animation-delay: calc(var(--i) * 50ms); }
@keyframes item-in { from { opacity: 0; transform: translateY(10px); } }
</style>
