<script setup>
import { ShieldCheck, Sparkles, Gem, Headset } from '@lucide/vue'

// Copy adapted from the brand's own Instagram posts
const features = [
  { icon: ShieldCheck, title: 'منتجات موثوقة', text: 'جودة مضمونة في كل قطعة نعرضها، من الكابينة لأصغر اكسسوار.' },
  { icon: Sparkles, title: 'تصاميم عصرية', text: 'تشكيلات تواكب أحدث صيحات تصميم الحمامات وتلبي احتياجاتكم.' },
  { icon: Gem, title: 'اختيار دقيق', text: 'ننتقي أفضل المنتجات من المصدر لنقدّم لكم الأفضل دائماً.' },
  { icon: Headset, title: 'استشارة قبل الشراء', text: 'راسلونا على الخاص وفريقنا يساعدك تختار الأنسب لمساحتك.' },
]
</script>

<template>
  <section id="why" class="bg-marble relative overflow-hidden py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
      <div>
        <p v-reveal class="font-serif text-lg tracking-[0.25em] text-brand-600 uppercase italic">Why OPRA</p>
        <h2 v-reveal="100" class="mt-3 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
          جودة عالية..
          <span class="block text-gradient">تصميم راقي.</span>
        </h2>
        <p v-reveal="200" class="mt-6 max-w-lg text-lg leading-loose text-ink-soft">
          في معرض أوبرا نؤمن إن الحمّام مو بس مساحة خدمية — هو مكان راحتك اليومية. لذلك نختار كل قطعة بعناية لتجمع بين المتانة والجمال.
        </p>

        <div class="mt-12 grid gap-4 sm:grid-cols-2">
          <div v-for="(f, i) in features" :key="f.title" v-reveal="i * 100"
               class="group relative overflow-hidden rounded-3xl border border-stone bg-white/70 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-20px_rgba(4,68,148,0.3)]">
            <div class="absolute -top-10 -left-10 size-32 rounded-full bg-brand-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>
            <span class="relative grid size-12 place-items-center rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-700/30 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
              <component :is="f.icon" :size="22" />
            </span>
            <h3 class="relative mt-5 text-lg font-bold">{{ f.title }}</h3>
            <p class="relative mt-2 text-sm leading-relaxed text-ink-soft">{{ f.text }}</p>
          </div>
        </div>
      </div>

      <div class="relative mx-auto h-[540px] w-full max-w-[520px] sm:h-[640px]">
        <span class="parallax pointer-events-none absolute -right-4 bottom-0 font-serif text-[9rem] leading-none font-bold text-transparent select-none sm:text-[11rem] [-webkit-text-stroke:1.5px_var(--color-brand-200)]" style="--p: 80px" aria-hidden="true">OPRA</span>

        <div v-reveal class="absolute top-14 right-0 w-[72%]">
          <div class="parallax overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-30px_rgba(7,31,68,0.45)]" style="--p: 30px">
            <img src="/images/basin-black.jpg" alt="مغسلة سوداء على رخام داكن" loading="lazy" class="aspect-[3/4] w-full scale-110 object-cover" />
          </div>
        </div>

        <div v-reveal="200" class="absolute bottom-0 left-0 w-[50%]">
          <div class="parallax overflow-hidden rounded-t-full border-[6px] border-marble shadow-2xl shadow-brand-900/25" style="--p: -50px">
            <img src="/images/towel-shelf.jpg" alt="رف مناشف" loading="lazy" class="aspect-[3/4] w-full object-cover" />
          </div>
        </div>

        <div v-reveal="350" class="absolute top-6 left-6 sm:left-10">
          <div class="animate-float rounded-2xl bg-brand-700 px-5 py-4 text-white shadow-xl shadow-brand-700/30">
            <p class="font-serif text-3xl leading-none font-bold">100%</p>
            <p class="mt-1 text-sm text-white/80">منتجات أصلية</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
