import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// v-reveal / v-reveal="150" (delay ms): fades the element in once it scrolls into view
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return
    e.target.classList.add('is-in')
    io.unobserve(e.target)
  }),
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
)

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
  .mount('#app')
