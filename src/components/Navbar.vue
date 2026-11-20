<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Phone, Menu, X } from '@lucide/vue'
import SiteBrand from './SiteBrand.vue'
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
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-(--ease-out-expo)"
    :class="[hidden ? '-translate-y-full' : 'translate-y-0', scrolled || open ? 'py-2' : 'py-4 sm:py-5']"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-2xl px-4 transition-all duration-500 sm:px-6"
      :class="scrolled || open ? 'mx-3 bg-white/80 py-2 shadow-[0_10px_40px_-12px_rgba(4,68,148,0.25)] ring-1 ring-brand-100 backdrop-blur-xl xl:mx-auto' : 'py-1'"
    >
      <SiteBrand />

      <nav class="hidden items-center gap-1 lg:flex">
        <router-link v-for="l in nav" :key="l.to" :to="l.to"
                     class="group relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors hover:text-brand-700"
                     :class="isActive(l.to) ? 'text-brand-700' : 'text-ink/80'">
          {{ l.label }}
          <span class="absolute inset-x-4 -bottom-0.5 h-0.5 origin-right rounded-full bg-brand-600 transition-transform duration-300 group-hover:scale-x-100"
                :class="isActive(l.to) ? 'scale-x-100' : 'scale-x-0'"></span>
        </router-link>
      </nav>

      <div class="flex items-center gap-2">
        <a :href="`tel:${phones[0].tel}`"
           class="hidden items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/25 transition-all hover:-translate-y-0.5 hover:bg-brand-600 sm:inline-flex">
          <Phone :size="16" />
          اتصل الآن
        </a>
        <button class="grid size-11 place-items-center rounded-full text-brand-700 transition-colors hover:bg-brand-100 lg:hidden"
                :aria-label="open ? 'إغلاق القائمة' : 'فتح القائمة'" :aria-expanded="open" @click="open = !open">
          <X v-if="open" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </div>

    <Transition name="menu">
      <nav v-if="open" class="mx-3 mt-2 rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-brand-100 backdrop-blur-xl lg:hidden">
        <router-link v-for="(l, i) in nav" :key="l.to" :to="l.to" :style="{ '--i': i }"
                     class="menu-item flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium hover:bg-brand-50"
                     :class="isActive(l.to) ? 'bg-brand-50 text-brand-700' : 'text-ink'">
          {{ l.label }}
          <span class="font-serif text-sm text-brand-400">0{{ i + 1 }}</span>
        </router-link>
        <a :href="`tel:${phones[0].tel}`" class="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-700 py-3.5 font-semibold text-white">
          <Phone :size="18" /> <span dir="ltr">{{ phones[0].label }}</span>
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active, .menu-leave-active { transition: opacity 0.3s, transform 0.4s var(--ease-out-expo); }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-10px) scale(0.98); }
.menu-enter-active .menu-item { animation: item-in 0.5s var(--ease-out-expo) both; animation-delay: calc(var(--i) * 50ms); }
@keyframes item-in { from { opacity: 0; transform: translateX(-16px); } }
</style>
