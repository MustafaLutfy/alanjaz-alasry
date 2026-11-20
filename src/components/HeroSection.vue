<script setup>
import { ref } from 'vue'
import { ArrowLeft, Truck, ShieldCheck, Clock } from '@lucide/vue'
import BrandIcon from './BrandIcon.vue'
import WaveDivider from './WaveDivider.vue'
import { waLink, hours } from '../data'

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
  { icon: Clock, text: hours },
]
const ring = 'OPRA • BATHROOM CABINET • OPRA • BATHROOM CABINET • '
</script>

<template>
  <section ref="hero" class="hero bg-marble relative overflow-hidden pt-28 sm:pt-32 lg:pt-36" @mousemove="onMove">
    <!-- ambient glows -->
    <div class="px pointer-events-none absolute -top-40 left-[-10%] size-[620px] rounded-full bg-brand-400/20 blur-[120px]" style="--depth: -30px"></div>
    <div class="px pointer-events-none absolute right-[-8%] bottom-10 size-[480px] rounded-full bg-glow/40 blur-[120px]" style="--depth: 24px"></div>

    <div class="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-16">
      <!-- Copy -->
      <div class="relative z-10 text-center lg:text-right">
        <div class="enter inline-flex items-center gap-2.5 rounded-full border border-brand-200/80 bg-white/60 px-4 py-2 text-sm font-medium text-brand-700 backdrop-blur" style="--d: 100ms">
          <span class="relative flex size-2">
            <span class="absolute inline-flex size-full animate-ping rounded-full bg-brand-500 opacity-60"></span>
            <span class="relative inline-flex size-2 rounded-full bg-brand-600"></span>
          </span>
          الإنجاز العصري · معرض أوبرا
        </div>

        <h1 class="mt-7 text-[3.4rem] leading-[1.05] font-extrabold tracking-tight text-ink sm:text-7xl lg:text-[5.4rem] xl:text-[6rem]">
          <span class="rise"><span style="--d: 150ms">فخامة</span></span>
          <span class="rise"><span style="--d: 280ms">تبدأ من</span></span>
          <span class="rise"><span style="--d: 410ms" class="text-gradient">حمّامك.</span></span>
        </h1>

        <p class="enter mx-auto mt-7 max-w-xl text-lg leading-loose text-ink-soft lg:mx-0" style="--d: 600ms">
          كابينات، مغاسل، خلاطات، مرايا LED واكسسوارات — تصاميم عصرية مختارة بعناية
          <span class="font-semibold text-brand-700">بجودة عالية وتصميم راقي.</span>
        </p>

        <div class="enter mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start" style="--d: 720ms">
          <router-link to="/gallery" class="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-700 py-4 ps-8 pe-4 text-base font-semibold text-white shadow-xl shadow-brand-700/30 transition-transform hover:-translate-y-0.5">
            <span class="absolute inset-0 translate-x-full bg-brand-500 transition-transform duration-500 ease-(--ease-out-expo) group-hover:translate-x-0"></span>
            <span class="relative">تصفّح المعرض</span>
            <span class="relative grid size-9 place-items-center rounded-full bg-white/15 transition-transform duration-500 group-hover:-translate-x-1">
              <ArrowLeft :size="18" />
            </span>
          </router-link>
          <a :href="waLink('مرحباً، عندي استفسار عن منتجاتكم')" target="_blank" rel="noopener"
             class="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/70 px-7 py-4 text-base font-semibold text-ink backdrop-blur transition-all hover:border-wa/50 hover:text-[#128C7E]">
            <BrandIcon name="whatsapp" :size="20" class="text-wa" />
            راسلنا على واتساب
          </a>
        </div>

        <ul class="enter mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-ink-soft lg:justify-start" style="--d: 860ms">
          <li v-for="t in trust" :key="t.text" class="flex items-center gap-2">
            <span class="grid size-8 place-items-center rounded-full bg-brand-100 text-brand-700"><component :is="t.icon" :size="16" /></span>
            {{ t.text }}
          </li>
        </ul>
      </div>

      <!-- Visual composition -->
      <div class="relative mx-auto h-[500px] w-full max-w-[540px] sm:h-[600px] lg:h-[640px]">
        <div class="enter absolute top-16 left-0 w-[46%] sm:top-20" style="--d: 500ms">
          <div class="px" style="--depth: 14px">
            <div class="arch aspect-[3/4.4] overflow-hidden rounded-t-full border-[6px] border-white shadow-2xl shadow-brand-900/20">
              <img src="/images/mirror-round.jpg" alt="مرآة دائرية مع اكسسوارات حمام" class="size-full object-cover" />
            </div>
          </div>
        </div>

        <div class="enter absolute top-0 right-0 w-[68%]" style="--d: 300ms">
          <div class="px" style="--depth: -22px">
            <div class="arch relative aspect-[3/4.3] overflow-hidden rounded-t-full border-[6px] border-white shadow-[0_40px_80px_-30px_rgba(7,31,68,0.45)]">
              <img src="/images/vanity-led.jpg" alt="كابينة حمام مع مرآة LED" class="hero-img size-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        <!-- rotating badge -->
        <div class="enter absolute top-[44%] left-[38%] z-10" style="--d: 800ms">
          <div class="px" style="--depth: 34px">
            <div class="relative grid size-28 place-items-center rounded-full bg-white shadow-xl shadow-brand-900/15 sm:size-32">
              <svg class="absolute inset-0 animate-spin [animation-duration:18s]" viewBox="0 0 100 100" aria-hidden="true">
                <defs><path id="ring" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" /></defs>
                <text direction="ltr" class="fill-brand-700 font-serif text-[7.4px] font-semibold">
                  <textPath href="#ring" textLength="236" lengthAdjust="spacing">{{ ring }}</textPath>
                </text>
              </svg>
              <img src="/opra-logo.png" alt="" class="w-11 sm:w-12" />
            </div>
          </div>
        </div>

        <!-- floating card -->
        <div class="enter absolute right-[-4%] bottom-4 z-10 sm:right-[-8%] sm:bottom-10" style="--d: 950ms">
          <div class="px" style="--depth: 26px">
            <router-link to="/gallery?cat=accessories" class="animate-float flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 p-3 pe-5 shadow-xl shadow-brand-900/10 backdrop-blur-xl">
              <img src="/images/towel-shelf.jpg" alt="" class="size-14 rounded-xl object-cover" />
              <div>
                <p class="text-sm font-bold text-ink">اكسسوارات الحمام</p>
                <p class="font-serif text-sm text-brand-600 italic">Bathroom Accessories</p>
              </div>
            </router-link>
          </div>
        </div>

        <span class="px pointer-events-none absolute -bottom-6 left-2 font-serif text-[7rem] leading-none font-bold text-brand-700/[0.06] select-none sm:text-[9rem]" style="--depth: -12px" aria-hidden="true">OPRA</span>
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
:root.ready .arch { clip-path: inset(0 0 0 0 round 999px 999px 0 0); }
.hero-img { transform: scale(1.2); transition: transform 2.2s var(--ease-out-expo); }
:root.ready .hero-img { transform: scale(1.04); }
.arch:hover .hero-img { transform: scale(1.1); }
</style>
