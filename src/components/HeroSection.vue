<script setup>
import { ref } from 'vue'
import { Truck, ShieldCheck, MapPin } from '@lucide/vue'
import Btn from './Btn.vue'
import Accent from './Accent.vue'
import BrandIcon from './BrandIcon.vue'
import WaveDivider from './WaveDivider.vue'
import { waLink, location } from '../data'
import { todayStatus } from '../utils'

const today = todayStatus()

// Mouse parallax: -1..1 written to CSS vars, consumed by .px layers
const hero = ref()
function onMove(e) {
  const r = hero.value.getBoundingClientRect()
  hero.value.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5) * 2)
  hero.value.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5) * 2)
}

const trust = [
  { icon: Truck, text: 'توصيل لجميع المحافظات' },
  { icon: ShieldCheck, text: 'منتجات أصلية' },
  { icon: MapPin, text: `معرضنا في ${location.city}` },
]
</script>

<template>
  <section ref="hero" class="hero surface-marble relative overflow-hidden pt-32 sm:pt-36 lg:pt-40" @mousemove="onMove">
    <div class="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-16">
      <!-- copy -->
      <div class="relative z-10 text-center lg:text-right">
        <!-- live status, in Baghdad time -->
        <div class="enter glass inline-flex items-center gap-3 rounded-full py-2 ps-3 pe-4 text-sm font-medium" style="--d: 100ms">
          <span class="relative flex size-2.5">
            <span v-if="today.open" class="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60"></span>
            <span class="relative inline-flex size-2.5 rounded-full" :class="today.open ? 'bg-emerald-500' : 'bg-sand'"></span>
          </span>
          <span :class="today.open ? 'text-ink' : 'text-ink-soft'">{{ today.open ? 'مفتوح الآن · حتى 3 العصر' : 'مغلق الآن · الدوام 7 ص – 3 م' }}</span>
          <span class="h-4 w-px bg-ink/15"></span>
          <span class="text-brand-700">معرض أوبرا</span>
        </div>

        <h1 class="t-display mt-8 text-ink">
          <span class="rise"><span style="--d: 150ms">فخامة</span></span>
          <span class="rise"><span style="--d: 270ms">تبدأ من</span></span>
          <span class="rise" style="padding-bottom: 0.34em"><span style="--d: 390ms"><Accent>حمّامك.</Accent></span></span>
        </h1>

        <p class="enter t-lead mx-auto mt-8 max-w-xl text-ink-soft lg:mx-0" style="--d: 600ms">
          الإنجاز العصري — كابينات، مغاسل، خلاطات، مرايا واكسسوارات من OPRA، بتصاميم عصرية مختارة بعناية.
        </p>

        <div class="enter mx-auto mt-10 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start" style="--d: 720ms">
          <Btn to="/gallery" class="w-full sm:w-auto">تصفّح المعرض</Btn>
          <Btn :href="waLink('مرحباً، عندي استفسار')" variant="outline" class="w-full sm:w-auto">
            راسلنا على واتساب
            <template #icon><BrandIcon name="whatsapp" :size="18" /></template>
          </Btn>
        </div>

        <ul class="enter mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-ink-soft lg:justify-start" style="--d: 860ms">
          <li v-for="t in trust" :key="t.text" class="flex items-center gap-2">
            <span class="grid size-8 place-items-center rounded-full bg-brand-700/[0.07] text-brand-700"><component :is="t.icon" :size="16" /></span>
            {{ t.text }}
          </li>
        </ul>
      </div>

      <!-- visual composition -->
      <div class="relative mx-auto h-[500px] w-full max-w-[540px] sm:h-[600px] lg:h-[640px]">
        <div class="enter absolute top-16 left-0 w-[46%] sm:top-20" style="--d: 500ms">
          <div class="px" style="--depth: 14px">
            <div v-water class="arch aspect-[3/4.4] overflow-hidden rounded-t-full border-[6px] border-white shadow-2xl shadow-brand-900/20" data-cursor="شاهد">
              <img src="/images/mirror-round.jpg" alt="مرآة دائرية مع اكسسوارات حمام" class="size-full object-cover" />
            </div>
          </div>
        </div>

        <div class="enter absolute top-0 right-0 w-[68%]" style="--d: 300ms">
          <div class="px" style="--depth: -22px">
            <div v-water class="arch sheen relative aspect-[3/4.3] overflow-hidden rounded-t-full border-[6px] border-white shadow-[0_40px_80px_-30px_rgba(7,31,68,0.45)]" data-cursor="شاهد">
              <img src="/images/vanity-led.jpg" alt="كابينة حمام مع مرآة بإضاءة" class="hero-img size-full object-cover" />
            </div>
          </div>
        </div>

        <!-- floating glass card -->
        <div class="enter absolute right-[-3%] bottom-6 z-10 sm:right-[-6%] sm:bottom-12" style="--d: 950ms">
          <div class="px" style="--depth: 26px">
            <router-link to="/gallery?cat=accessories" class="glass animate-float flex items-center gap-3 rounded-card p-2.5 pe-5">
              <img src="/images/towel-shelf.jpg" alt="" class="size-14 rounded-2xl object-cover" />
              <span>
                <span class="block text-sm font-bold text-ink">اكسسوارات الحمام</span>
                <span class="block font-serif text-sm text-brand-700 italic">Bathroom Accessories</span>
              </span>
            </router-link>
          </div>
        </div>

        <!-- logo seal -->
        <div class="enter absolute top-[46%] left-[40%] z-10" style="--d: 800ms">
          <div class="px" style="--depth: 34px">
            <div class="glass grid size-24 place-items-center rounded-full sm:size-28">
              <img src="/opra-logo.png" alt="" class="w-12 sm:w-14" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <WaveDivider />
  </section>
</template>

<style scoped>
.hero { --mx: 0; --my: 0; }
.px {
  transform: translate3d(calc(var(--mx) * var(--depth, 16px)), calc(var(--my) * var(--depth, 16px)), 0);
  transition: transform 0.9s var(--ease-out-expo);
}
.arch { clip-path: inset(100% 0 0 0 round 999px 999px 0 0); transition: clip-path 1.4s var(--ease-out-expo) var(--d, 0ms); }
:root.ready:not(.covered) .arch { clip-path: inset(0 0 0 0 round 999px 999px 0 0); }
.hero-img { transform: scale(1.2); transition: transform 2.2s var(--ease-out-expo); }
:root.ready:not(.covered) .hero-img { transform: scale(1.04); }
</style>
