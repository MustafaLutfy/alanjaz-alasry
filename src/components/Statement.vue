<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Eyebrow from './Eyebrow.vue'

// Words light up one by one as the paragraph scrolls through the viewport.
const text = 'في معرض أوبرا نؤمن إن الحمّام مو بس مساحة خدمية — هو مكان راحتك اليومية. لهذا نختار كل قطعة بعناية، حتى تجمع بين المتانة والجمال وتعيش معك سنين.'
const accent = new Set(['راحتك', 'اليومية.', 'المتانة', 'والجمال'])
const words = text.split(' ')
const el = ref()
const p = ref(matchMedia('(prefers-reduced-motion: reduce)').matches ? 1 : 0)

function update() {
  const r = el.value.getBoundingClientRect()
  p.value = Math.min(Math.max((innerHeight * 0.82 - r.top) / (r.height + innerHeight * 0.3), 0), 1)
}
const lit = (i) => Math.min(Math.max(p.value * words.length * 1.15 - i, 0.14), 1)

onMounted(() => {
  if (p.value) return
  update()
  addEventListener('scroll', update, { passive: true })
})
onUnmounted(() => removeEventListener('scroll', update))
</script>

<template>
  <section class="section-y bg-marble">
    <div class="mx-auto max-w-5xl px-5 sm:px-8">
      <Eyebrow v-reveal>فلسفتنا</Eyebrow>
      <p ref="el" class="t-statement mt-8 text-ink">
        <!-- explicit space node: the compiler drops trailing whitespace inside each span -->
        <template v-for="(w, i) in words" :key="i"><span :style="{ opacity: lit(i) }" :class="accent.has(w) && 'text-brand-700'">{{ w }}</span>{{ ' ' }}</template>
      </p>
    </div>
  </section>
</template>
