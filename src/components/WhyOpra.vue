<script setup>
import { ShieldCheck, Sparkles, Gem, Headset } from '@lucide/vue'
import Eyebrow from './Eyebrow.vue'
import Accent from './Accent.vue'

// Copy adapted from the brand's own Instagram posts
const features = [
  { icon: ShieldCheck, title: 'منتجات موثوقة', text: 'جودة مضمونة في كل قطعة نعرضها، من الكابينة لأصغر اكسسوار.' },
  { icon: Sparkles, title: 'تصاميم عصرية', text: 'تشكيلات تواكب أحدث صيحات تصميم الحمامات وتلبي احتياجاتكم.' },
  { icon: Gem, title: 'اختيار دقيق', text: 'ننتقي من المصدر بعناية لنقدّم لكم الأفضل دائماً.' },
  { icon: Headset, title: 'استشارة قبل الشراء', text: 'راسلونا على الخاص وفريقنا يساعدك تختار الأنسب لمساحتك.' },
]
</script>

<template>
  <section id="why" class="section-y surface-marble relative overflow-hidden">
    <div class="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
      <div>
        <div v-reveal>
          <Eyebrow>لماذا أوبرا</Eyebrow>
          <h2 class="t-h2 mt-4">جودة عالية..<br /><Accent>تصميم راقي.</Accent></h2>
        </div>
        <p v-reveal="150" class="t-lead mt-6 max-w-lg text-ink-soft">
          علامة OPRA متخصصة بأثاث ومستلزمات الحمامات، ونحن نعرضها لكم بمعرضنا مع خدمة تبدأ قبل الشراء وتستمر لحد التوصيل.
        </p>

        <div class="mt-12 grid gap-4 sm:grid-cols-2">
          <div v-for="(f, i) in features" :key="f.title" v-reveal="i * 100"
               class="group relative rounded-card bg-white/75 p-6 ring-1 ring-ink/[0.06] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_56px_-28px_rgba(4,68,148,0.35)]">
            <div class="flex items-center justify-between">
              <span class="grid size-12 place-items-center rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-700/30 transition-transform duration-500 group-hover:-rotate-6">
                <component :is="f.icon" :size="22" />
              </span>
              <span class="font-serif text-2xl font-semibold text-ink/15">0{{ i + 1 }}</span>
            </div>
            <h3 class="t-h3 mt-5">{{ f.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-soft">{{ f.text }}</p>
          </div>
        </div>
      </div>

      <div class="relative mx-auto h-[540px] w-full max-w-[520px] sm:h-[640px]">
        <span class="parallax pointer-events-none absolute -right-4 bottom-0 font-serif text-[9rem] leading-none font-bold text-transparent select-none sm:text-[11rem] [-webkit-text-stroke:1.5px_var(--color-brand-200)]" style="--p: 80px" aria-hidden="true">OPRA</span>

        <div v-reveal class="absolute top-14 right-0 w-[72%]">
          <div v-water class="parallax overflow-hidden rounded-media shadow-[0_40px_80px_-30px_rgba(7,31,68,0.45)]" style="--p: 30px" data-cursor="شاهد">
            <img src="/images/basin-black.jpg" alt="مغسلة على رخام داكن" loading="lazy" class="aspect-[3/4] w-full scale-110 object-cover" />
          </div>
        </div>

        <div v-reveal="200" class="absolute bottom-0 left-0 w-[50%]">
          <div v-water class="parallax overflow-hidden rounded-t-full border-[6px] border-marble shadow-2xl shadow-brand-900/25" style="--p: -50px" data-cursor="شاهد">
            <img src="/images/towel-shelf.jpg" alt="رف مناشف" loading="lazy" class="aspect-[3/4] w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
