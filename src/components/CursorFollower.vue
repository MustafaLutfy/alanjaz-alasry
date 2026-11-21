<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// A ring that trails the native cursor, grows over interactive elements and shows data-cursor labels.
const enabled = matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches
const ring = ref()
const label = ref('')
const state = ref('')
let mx = -100, my = -100, x = -100, y = -100, raf = 0

function move(e) {
  mx = e.clientX
  my = e.clientY
  const t = e.target.closest?.('[data-cursor], a, button, select, [role="tab"]')
  label.value = t?.dataset?.cursor || ''
  state.value = !t ? '' : label.value ? 'is-label' : 'is-hover'
}
function loop() {
  x += (mx - x) * 0.2
  y += (my - y) * 0.2
  if (ring.value) ring.value.style.transform = `translate3d(${x}px, ${y}px, 0)`
  raf = requestAnimationFrame(loop)
}
const hide = () => (state.value = 'is-out')

onMounted(() => {
  if (!enabled) return
  addEventListener('mousemove', move, { passive: true })
  document.documentElement.addEventListener('mouseleave', hide)
  loop()
})
onUnmounted(() => {
  removeEventListener('mousemove', move)
  document.documentElement.removeEventListener('mouseleave', hide)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <div v-if="enabled" ref="ring" class="pointer-events-none fixed top-0 left-0 z-[95]" aria-hidden="true">
    <div class="cursor" :class="state"><span>{{ label }}</span></div>
  </div>
</template>

<style scoped>
.cursor {
  display: grid; place-items: center;
  width: 34px; height: 34px; margin: -17px 0 0 -17px; border-radius: 50%;
  border: 1.5px solid rgb(4 68 148 / 0.35);
  color: #fff; font-size: 13px; font-weight: 600; white-space: nowrap;
  transition: width .45s var(--ease-out-expo), height .45s var(--ease-out-expo), margin .45s var(--ease-out-expo), background-color .3s, border-color .3s, opacity .3s;
}
.cursor span { opacity: 0; transition: opacity .2s; }
.is-hover { width: 58px; height: 58px; margin: -29px 0 0 -29px; background: rgb(4 68 148 / 0.08); border-color: rgb(4 68 148 / 0.5); }
.is-label { width: 84px; height: 84px; margin: -42px 0 0 -42px; background: var(--color-brand-700); border-color: transparent; }
.is-label span { opacity: 1; }
.is-out { opacity: 0; }
</style>
