<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Velocity marquee: drifts on its own, speeds up / skews with scroll speed and follows scroll direction.
const items = ['كابينات الحمام', 'المرايا', 'المغاسل', 'الخلاطات', 'الشاورات', 'المراحيض', 'الاكسسوارات', 'جودة عالية', 'تصميم راقي']
const COPIES = 3
const box = ref()
const track = ref()
let x = 0, v = 0, dir = 1, lastY = 0, raf = 0, third = 0

function tick() {
  const dy = scrollY - lastY
  lastY = scrollY
  if (dy) dir = Math.sign(dy)
  v += (dy * 0.18 - v) * 0.08 // eased scroll velocity
  third ||= track.value.scrollWidth / COPIES
  x = (((x + 0.55 * dir + v) % third) + third) % third
  track.value.style.transform = `translate3d(${x}px,0,0) skewX(${Math.max(-10, Math.min(10, -v * 0.5))}deg)`
  raf = requestAnimationFrame(tick)
}
let io
onMounted(() => {
  lastY = scrollY
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
  io = new IntersectionObserver(([e]) => {
    cancelAnimationFrame(raf)
    if (e.isIntersecting) { lastY = scrollY; tick() }
  })
  io.observe(box.value)
})
onUnmounted(() => { io?.disconnect(); cancelAnimationFrame(raf) })
</script>

<template>
  <div ref="box" class="relative overflow-hidden bg-brand-700 py-6 text-white sm:py-7" aria-hidden="true">
    <div ref="track" class="flex w-max will-change-transform">
      <ul v-for="n in COPIES" :key="n" class="flex shrink-0 items-center">
        <li v-for="(t, i) in items" :key="t" class="flex items-center gap-8 px-8 text-2xl font-bold whitespace-nowrap sm:text-3xl">
          <!-- alternate by tone, not outline: text-stroke shows overlapping contours in joined Arabic letters -->
          <span :class="i % 2 && 'text-white/45'">{{ t }}</span>
          <svg class="h-3 w-9 shrink-0 text-glow" viewBox="0 0 28 10" fill="none"><path d="M1 5c3.2-4 6.4-4 9.6 0s6.4 4 9.6 0S26 1 27 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
        </li>
      </ul>
    </div>
  </div>
</template>
