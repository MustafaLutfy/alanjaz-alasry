import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const hoverable = matchMedia('(hover: hover) and (pointer: fine)').matches

// v-reveal / v-reveal="150" (delay ms): fades the element in once it scrolls into view
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return
    e.target.classList.add('is-in')
    io.unobserve(e.target)
  }),
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
)

// v-water: the hovered image ripples like water through the shared #water SVG filter (App.vue).
// One filter is shared, so only one element holds it at a time and a single tween drives its strength.
const water = { el: null, raf: 0, s: 0 }
function waterTo(target, ms, then) {
  cancelAnimationFrame(water.raf)
  const node = document.querySelector('#water feDisplacementMap')
  const from = water.s
  const t0 = performance.now()
  const step = (t) => {
    const k = Math.min((t - t0) / ms, 1)
    water.s = from + (target - from) * (1 - (1 - k) ** 3)
    node?.setAttribute('scale', water.s.toFixed(1))
    if (k < 1) water.raf = requestAnimationFrame(step)
    else then?.()
  }
  water.raf = requestAnimationFrame(step)
}

// v-tilt: 3D tilt toward the cursor; exposes --gx/--gy for a .glare layer
function tiltMove(e) {
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width
  const py = (e.clientY - r.top) / r.height
  el.style.setProperty('--rx', `${(0.5 - py) * 7}deg`)
  el.style.setProperty('--ry', `${(px - 0.5) * 9}deg`)
  el.style.setProperty('--gx', `${px * 100}%`)
  el.style.setProperty('--gy', `${py * 100}%`)
}
function tiltReset(e) {
  e.currentTarget.style.setProperty('--rx', '0deg')
  e.currentTarget.style.setProperty('--ry', '0deg')
}

createApp(App)
  .use(router)
  .directive('reveal', {
    mounted(el, { value }) {
      el.classList.add('reveal')
      if (value) el.style.setProperty('--d', `${value}ms`)
      io.observe(el)
    },
    unmounted: (el) => io.unobserve(el),
  })
  .directive('water', {
    mounted(el) {
      if (!hoverable) return
      const imgOf = (node) => node.querySelector('img') || node
      el.addEventListener('mouseenter', () => {
        if (water.el && water.el !== el) imgOf(water.el).style.filter = ''
        water.el = el
        imgOf(el).style.filter = 'url(#water)'
        waterTo(28, 450, () => waterTo(10, 1000))
      })
      el.addEventListener('mouseleave', () => waterTo(0, 380, () => {
        if (water.el !== el) return
        imgOf(el).style.filter = ''
        water.el = null
      }))
    },
  })
  .directive('tilt', {
    mounted(el) {
      el.classList.add('tilt')
      if (!hoverable) return
      el.addEventListener('mousemove', tiltMove)
      el.addEventListener('mouseleave', tiltReset)
    },
  })
  .mount('#app')
