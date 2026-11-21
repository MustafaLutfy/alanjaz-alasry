<script setup>
import { ShieldCheck, Sparkles, Headset } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import JourneySection from '../components/JourneySection.vue'
import ContactSection from '../components/ContactSection.vue'
import Eyebrow from '../components/Eyebrow.vue'
import Accent from '../components/Accent.vue'
import Btn from '../components/Btn.vue'
import { governorates } from '../data'

const values = [
  { icon: ShieldCheck, title: 'الجودة', text: 'منتجات موثوقة بجودة مضمونة، نفحص كل قطعة قبل ما تطلع من المعرض.' },
  { icon: Sparkles, title: 'التصميم', text: 'تصاميم عصرية تواكب أحدث صيحات الحمامات وتناسب مختلف المساحات والأذواق.' },
  { icon: Headset, title: 'الخدمة', text: 'استشارة قبل الشراء، تغليف آمن، والتزام بالوقت بالتوصيل لكل المحافظات.' },
]
</script>

<template>
  <main>
    <PageHero title="الإنجاز" accent="العصري" eyebrow="من نحن" :crumbs="[{ label: 'من نحن' }]">
      معرض أوبرا لمستلزمات الحمامات والمغاسل والاكسسوارات — نختار لك القطعة كأنها لبيتنا.
    </PageHero>

    <!-- story -->
    <section class="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:pb-32">
      <div>
        <div v-reveal>
          <Eyebrow>قصتنا</Eyebrow>
          <h2 class="t-h2 mt-4">شركة عراقية..<br /><Accent>بلمسة عصرية.</Accent></h2>
        </div>
        <p v-reveal="150" class="t-lead mt-6 text-ink-soft">
          الإنجاز العصري شركة عراقية متخصصة بمستلزمات الحمامات. من خلال معرض أوبرا في بغداد نقدّم تشكيلة OPRA — كابينات، مغاسل، مرايا، خلاطات واكسسوارات — بتصاميم عصرية وجودة نثق بيها.
        </p>
        <p v-reveal="220" class="t-lead mt-4 text-ink-soft">
          نستقبلكم بالمعرض يومياً عدا الجمعة، ونخدم زبائننا بكل المحافظات عن طريق واتساب والتوصيل لباب البيت.
        </p>
      </div>

      <div class="relative mx-auto h-[480px] w-full max-w-[500px] sm:h-[560px]">
        <div v-reveal class="absolute top-0 right-0 w-[66%]">
          <div v-water class="sheen aspect-[3/4.3] overflow-hidden rounded-t-full border-[6px] border-white shadow-[0_40px_80px_-30px_rgba(7,31,68,0.45)]" data-cursor="شاهد">
            <img src="/images/vanity-white.jpg" alt="كابينة حمام" loading="lazy" class="size-full object-cover" />
          </div>
        </div>
        <div v-reveal="200" class="absolute bottom-0 left-0 w-[46%]">
          <div v-water class="parallax aspect-[3/4.4] overflow-hidden rounded-t-full border-[6px] border-white shadow-2xl shadow-brand-900/20" style="--p: -30px" data-cursor="شاهد">
            <img src="/images/toilet-wall.jpg" alt="حمام عصري" loading="lazy" class="size-full object-cover" />
          </div>
        </div>
        <div v-reveal="350" class="absolute top-[38%] left-[6%] z-10">
          <div class="glass animate-float rounded-card px-5 py-4">
            <p class="text-sm text-ink-soft">شعارنا</p>
            <p class="mt-1 font-bold text-brand-700">جودة عالية .. تصميم راقي</p>
          </div>
        </div>
      </div>
    </section>

    <!-- values -->
    <section class="section-y bg-brand-900 text-white">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div v-reveal class="max-w-2xl">
          <Eyebrow dark>قيمنا</Eyebrow>
          <h2 class="t-h2 mt-4">ثلاث أشياء <Accent dark>ما نتنازل عنها</Accent></h2>
        </div>
        <div class="mt-12 grid gap-4 md:grid-cols-3">
          <div v-for="(v, i) in values" :key="v.title" v-reveal="i * 120"
               class="group rounded-card bg-white/[0.05] p-8 ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.09]">
            <div class="flex items-start justify-between">
              <span class="grid size-14 place-items-center rounded-2xl bg-white text-brand-700 transition-transform duration-500 group-hover:-rotate-6">
                <component :is="v.icon" :size="26" />
              </span>
              <span class="font-serif text-5xl font-bold text-white/10">0{{ i + 1 }}</span>
            </div>
            <h3 class="mt-8 text-2xl font-bold">{{ v.title }}</h3>
            <p class="mt-3 leading-relaxed text-white/65">{{ v.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <JourneySection />

    <!-- governorates -->
    <section class="section-y surface-marble">
      <div class="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <div v-reveal>
          <Eyebrow>التوصيل</Eyebrow>
          <h2 class="t-h2 mt-4">نوصل لكل <Accent>محافظات العراق</Accent></h2>
        </div>
        <ul class="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2.5">
          <li v-for="(g, k) in governorates" :key="g" v-reveal="k * 35"
              class="flex h-11 cursor-default items-center rounded-full bg-white/80 px-5 font-medium ring-1 ring-ink/[0.08] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:text-white hover:ring-brand-700">
            {{ g }}
          </li>
        </ul>
      </div>
    </section>

    <!-- brand -->
    <section class="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
      <div v-reveal class="relative flex flex-col items-center gap-8 overflow-hidden rounded-media bg-brand-700 p-10 text-center text-white md:flex-row md:text-right lg:p-14">
        <img src="/opra-logo-white.png" alt="OPRA Bathroom Cabinet" class="w-32 shrink-0 lg:w-40" />
        <div class="relative flex-1">
          <h2 class="text-3xl font-bold">العلامة اللي نعرضها</h2>
          <p class="mt-3 max-w-xl leading-loose text-white/75">OPRA Bathroom Cabinet — علامة متخصصة بأثاث ومستلزمات الحمامات، من الكابينات والمرايا إلى المغاسل والاكسسوارات.</p>
        </div>
        <Btn to="/gallery" variant="light" class="relative shrink-0">شوف المعرض</Btn>
        <svg class="pointer-events-none absolute -bottom-6 left-0 w-full text-white/10" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30 Q50 0 100 30 T200 30 T300 30 T400 30" fill="none" stroke="currentColor" stroke-width="8" />
        </svg>
      </div>
    </section>

    <ContactSection />
  </main>
</template>
