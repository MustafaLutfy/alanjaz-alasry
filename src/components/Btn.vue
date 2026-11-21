<script setup>
import { computed } from 'vue'
import { ArrowLeft } from '@lucide/vue'

// The only button in the site: fixed heights per size, so buttons placed side by side always match.
const props = defineProps({
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  variant: { type: String, default: 'primary' }, // primary | outline | light | glass
  size: { type: String, default: 'lg' }, // lg | md
  icon: { type: [Object, Function], default: () => ArrowLeft },
  type: { type: String, default: 'button' },
})
const tag = computed(() => (props.to ? 'router-link' : props.href ? 'a' : 'button'))
const external = computed(() => !!props.href && /^https?:/.test(props.href))

// magnetic pull toward the cursor
function move(e) {
  const t = e.currentTarget
  const r = t.getBoundingClientRect()
  t.style.setProperty('--tx', `${(e.clientX - r.left - r.width / 2) * 0.16}px`)
  t.style.setProperty('--ty', `${(e.clientY - r.top - r.height / 2) * 0.3}px`)
}
function leave(e) {
  e.currentTarget.style.setProperty('--tx', '0px')
  e.currentTarget.style.setProperty('--ty', '0px')
}
// water-drop ripple from the click point (skipped for keyboard activation)
function ripple(e) {
  if (!e.detail) return
  const t = e.currentTarget
  const r = t.getBoundingClientRect()
  const s = document.createElement('span')
  s.className = 'btn-ripple'
  s.style.left = `${e.clientX - r.left}px`
  s.style.top = `${e.clientY - r.top}px`
  t.appendChild(s)
  s.addEventListener('animationend', () => s.remove())
}
</script>

<template>
  <component :is="tag" :to="to || undefined" :href="href || undefined" :type="tag === 'button' ? type : undefined"
             :target="external ? '_blank' : undefined" :rel="external ? 'noopener' : undefined"
             class="btn" :class="[`btn-${variant}`, `btn-${size}`]"
             @mousemove="move" @mouseleave="leave" @click="ripple">
    <span><slot /></span>
    <span class="btn-icon"><slot name="icon"><component :is="icon" :size="size === 'lg' ? 18 : 16" /></slot></span>
  </component>
</template>
