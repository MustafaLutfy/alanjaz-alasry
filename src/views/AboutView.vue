<script setup>
import { ShieldCheck, Sparkles, Headset, ArrowLeft } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import JourneySection from '../components/JourneySection.vue'
import ContactSection from '../components/ContactSection.vue'
import { governorates } from '../data'

const values = [
  { icon: ShieldCheck, title: 'الجودة', text: 'منتجات موثوقة بجودة مضمونة، نفحص كل قطعة قبل ما تطلع من المعرض.' },
  { icon: Sparkles, title: 'التصميم', text: 'تصاميم عصرية تواكب أحدث صيحات الحمامات وتناسب مختلف المساحات والأذواق.' },
  { icon: Headset, title: 'الخدمة', text: 'استشارة قبل الشراء، تغليف آمن، والتزام بالوقت بالتوصيل لكل المحافظات.' },
]
</script>

<template>
  <main>
    <PageHero title="الإنجاز" accent="العصري" eyebrow="About Us" :crumbs="[{ label: 'من نحن' }]">
      معرض أوبرا لمستلزمات الحمامات والمغاسل والاكسسوارات — نختار لك القطعة كأنها لبيتنا.
    </PageHero>

    <!-- story -->
    <section class="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:pb-32">
      <div>
        <p v-reveal class="font-serif text-lg tracking-[0.25em] text-brand-600 uppercase italic">Our Story</p>
        <h2 v-reveal="100" class="mt-3 text-4xl leading-tight font-bold sm:text-5xl">
          شركة عراقية..
          <span class="block text-gradient">بلمسة عصرية.</span>
        </h2>
        <p v-reveal="180" class="mt-6 text-lg leading-loose text-ink-soft">
          الإنجاز العصري شركة عراقية متخصصة بمستلزمات الحمامات. من خلال معرض أوبرا نقدّم تشكيلة OPRA — كابينات، مغاسل، مرايا، خلاطات واكسسوارات — بتصاميم عصرية وجودة نثق بيها.
        </p>
        <p v-reveal="240" class="mt-4 text-lg leading-loose text-ink-soft">
          نؤمن إن الحمّام مو بس مساحة خدمية، هو مكان راحتك اليومية. نستقبلكم بالمعرض يومياً عدا الجمعة، ونخدم زبائننا بكل المحافظات عن طريق واتساب والتوصيل لباب البيت.
        </p>
      </div>

      <div class="relative mx-auto h-[480px] w-full max-w-[500px] sm:h-[560px]">
        <div v-reveal class="absolute top-0 right-0 w-[66%]">
          <div class="aspect-[3/4.3] overflow-hidden rounded-t-full border-[6px] border-white shadow-[0_40px_80px_-30px_rgba(7,31,68,0.45)]">
            <img src="/images/vanity-white.jpg" alt="كابينة بيضاء مع خزانة مرآة" loading="lazy" class="size-full object-cover" />
          </div>
        </div>
        <div v-reveal="200" class="absolute bottom-0 left-0 w-[46%]">
          <div class="parallax aspect-[3/4.4] overflow-hidden rounded-t-full border-[6px] border-white shadow-2xl shadow-brand-900/20" style="--p: -30px">
            <img src="/images/toilet-wall.jpg" alt="مرحاض معلق" loading="lazy" class="size-full object-cover" />
          </div>
        </div>
        <div v-reveal="350" class="absolute top-[38%] left-[8%] z-10">
          <div class="animate-float rounded-2xl bg-white px-5 py-4 shadow-xl shadow-brand-900/15">
            <p class="text-sm text-ink-soft">شعارنا</p>
            <p class="mt-1 font-bold text-brand-700">جودة عالية .. تصميم راقي</p>
          </div>
        </div>
      </div>
    </section>

    <!-- values -->
    <section class="bg-brand-900 py-24 text-white sm:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-8">
        <div class="max-w-2xl">
          <p v-reveal class="font-serif text-lg tracking-[0.25em] text-glow uppercase italic">Our Values</p>
          <h2 v-reveal="100" class="mt-3 text-4xl leading-tight font-bold sm:text-5xl">ثلاث أشياء ما نتنازل عنها</h2>
        </div>
        <div class="mt-12 grid gap-5 md:grid-cols-3">
          <div v-for="(v, i) in values" :key="v.title" v-reveal="i * 120"
               class="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10">
            <div class="flex items-start justify-between">
              <span class="grid size-14 place-items-center rounded-2xl bg-white text-brand-700 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
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
    <section class="bg-marble py-24 sm:py-28">
      <div class="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <p v-reveal class="font-serif text-lg tracking-[0.25em] text-brand-600 uppercase italic">Nationwide Delivery</p>
        <h2 v-reveal="100" class="mt-3 text-4xl leading-tight font-bold sm:text-5xl">نوصل لكل <span class="text-gradient">محافظات العراق</span></h2>
        <ul class="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
          <li v-for="(g, k) in governorates" :key="g" v-reveal="k * 35"
              class="cursor-default rounded-full border border-stone bg-white px-5 py-2.5 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-700 hover:text-white">
            {{ g }}
          </li>
        </ul>
      </div>
    </section>

    <!-- brand -->
    <section class="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
      <div v-reveal class="relative flex flex-col items-center gap-8 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 to-brand-800 p-10 text-center text-white md:flex-row md:text-right lg:p-14">
        <img src="/opra-logo-white.png" alt="OPRA Bathroom Cabinet" class="w-32 shrink-0 lg:w-40" />
        <div class="flex-1">
          <h2 class="text-3xl font-bold">العلامة اللي نعرضها</h2>
          <p class="mt-3 max-w-xl leading-loose text-white/75">OPRA Bathroom Cabinet — علامة متخصصة بأثاث ومستلزمات الحمامات، من الكابينات والمرايا إلى المغاسل والاكسسوارات.</p>
        </div>
        <router-link to="/gallery" class="group inline-flex shrink-0 items-center gap-3 rounded-full bg-white py-3.5 ps-7 pe-3.5 font-semibold text-brand-700 transition-transform hover:-translate-y-0.5">
          شوف المعرض
          <span class="grid size-8 place-items-center rounded-full bg-brand-100 transition-transform duration-500 group-hover:-translate-x-1"><ArrowLeft :size="16" /></span>
        </router-link>
        <svg class="pointer-events-none absolute -bottom-6 left-0 w-full text-white/10" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 30 Q50 0 100 30 T200 30 T300 30 T400 30" fill="none" stroke="currentColor" stroke-width="8" />
        </svg>
      </div>
    </section>

    <ContactSection />
  </main>
</template>
