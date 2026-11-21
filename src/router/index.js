import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const SITE = 'الإنجاز العصري'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView, meta: { title: `${SITE} | معرض أوبرا لمستلزمات الحمامات` } },
    { path: '/gallery', component: () => import('../views/GalleryView.vue'), meta: { title: `المعرض | ${SITE}` } },
    { path: '/about', component: () => import('../views/AboutView.vue'), meta: { title: `من نحن | ${SITE}` } },
    { path: '/contact', component: () => import('../views/ContactView.vue'), meta: { title: `اتصل بنا | ${SITE}` } },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFoundView.vue'), meta: { title: `الصفحة غير موجودة | ${SITE}` } },
  ],
  scrollBehavior(to, from, saved) {
    if (to.path === from.path) return false // query-only change (gallery filter): keep position
    return saved || { top: 0, behavior: 'instant' } // runs while the page curtain covers the screen
  },
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router
