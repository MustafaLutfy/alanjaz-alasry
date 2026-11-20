<script setup>
import { ref, reactive } from 'vue'
import { Phone, Clock, MapPin, Plus, ArrowUpLeft } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import BrandIcon from '../components/BrandIcon.vue'
import { phones, instagram, waLink, governorates, categories, faq, location, hours } from '../data'
import { normalizePhone } from '../utils'

const form = reactive({ name: '', phone: '', gov: '', cat: '', msg: '' })
const errors = ref({})

// No backend: validate, then open WhatsApp with a ready-made message
function submit() {
  const e = {}
  const phone = normalizePhone(form.phone)
  if (form.name.trim().length < 2) e.name = 'اكتب اسمك'
  if (!phone) e.phone = 'رقم غير صحيح — مثال: 07701234567'
  if (form.msg.trim().length < 3) e.msg = 'اكتب استفسارك'
  errors.value = e
  if (Object.keys(e).length) return
  const lines = [`مرحباً، أنا ${form.name.trim()}`, `رقمي: ${phone}`]
  if (form.gov) lines.push(`المحافظة: ${form.gov}`)
  if (form.cat) lines.push(`القسم: ${form.cat}`)
  lines.push('', form.msg.trim())
  window.open(waLink(lines.join('\n')), '_blank', 'noopener')
}

const openFaq = ref(0)
const field = 'w-full rounded-xl border border-stone bg-brand-50/50 px-4 py-3.5 text-[15px] outline-none transition-all focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-100'
</script>

<template>
  <main>
    <PageHero title="تواصل" accent="معنا" eyebrow="Get in Touch" :crumbs="[{ label: 'اتصل بنا' }]">
      للطلب والاستفسار راسلونا على الخاص أو اتصلوا بنا مباشرة — فريقنا جاهز يساعدك.
    </PageHero>

    <section class="mx-auto grid max-w-7xl gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-5">
      <!-- info cards -->
      <div class="grid content-start gap-4 lg:col-span-2">
        <a v-for="(p, i) in phones" :key="p.tel" v-reveal="i * 100" :href="`tel:${p.tel}`"
           class="group flex items-center gap-4 rounded-3xl border border-stone bg-white/80 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-20px_rgba(4,68,148,0.3)]">
          <span class="grid size-12 place-items-center rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-700/30 transition-transform duration-500 group-hover:-rotate-6"><Phone :size="22" /></span>
          <div>
            <p class="text-sm text-ink-soft">اتصل بنا</p>
            <p class="font-serif text-2xl font-bold tracking-wide" dir="ltr">{{ p.label }}</p>
          </div>
        </a>
        <div v-reveal="200" class="grid grid-cols-2 gap-4">
          <a :href="waLink()" target="_blank" rel="noopener" class="group rounded-3xl border border-stone bg-white/80 p-5 transition-all duration-500 hover:border-wa/40 hover:bg-wa/5">
            <BrandIcon name="whatsapp" :size="26" class="text-wa" />
            <p class="mt-3 text-sm text-ink-soft">واتساب</p>
            <p class="mt-0.5 font-bold">راسلنا مباشرة</p>
          </a>
          <a :href="instagram" target="_blank" rel="noopener" class="group rounded-3xl border border-stone bg-white/80 p-5 transition-all duration-500 hover:border-[#DD2A7B]/30 hover:bg-[#DD2A7B]/5">
            <BrandIcon name="instagram" :size="26" class="text-[#DD2A7B]" />
            <p class="mt-3 text-sm text-ink-soft">انستغرام</p>
            <p class="mt-0.5 font-bold" dir="ltr">@alanjaz_alasry</p>
          </a>
        </div>
        <div v-reveal="280" class="rounded-3xl border border-stone bg-white/80 p-6">
          <div class="flex items-center gap-3"><span class="grid size-10 place-items-center rounded-xl bg-brand-100 text-brand-700"><Clock :size="20" /></span><h2 class="font-bold">أوقات الدوام</h2></div>
          <dl class="mt-4 divide-y divide-stone text-[15px]">
            <div class="flex justify-between py-3"><dt>السبت — الخميس</dt><dd class="font-semibold text-brand-700">مفتوح</dd></div>
            <div class="flex justify-between py-3 text-ink-soft"><dt>الجمعة</dt><dd>مغلق</dd></div>
          </dl>
        </div>
        <a v-reveal="340" href="#map" class="flex gap-4 rounded-3xl bg-brand-50 p-6 transition-colors hover:bg-brand-100">
          <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-brand-700"><MapPin :size="20" /></span>
          <div>
            <h2 class="font-bold">موقع المعرض</h2>
            <p class="mt-1 text-sm leading-relaxed text-ink-soft">{{ location.city }} — شوف الموقع على الخريطة بالأسفل.</p>
          </div>
        </a>
      </div>

      <!-- form -->
      <form v-reveal="150" class="rounded-[2rem] border border-stone bg-white p-6 shadow-[0_30px_80px_-40px_rgba(4,68,148,0.35)] sm:p-10 lg:col-span-3" novalidate @submit.prevent="submit">
        <h2 class="text-3xl font-bold">أرسل استفسارك</h2>
        <p class="mt-2 text-ink-soft">املأ النموذج ويفتح لك واتساب برسالة جاهزة.</p>

        <div class="mt-8 grid gap-5 sm:grid-cols-2">
          <label class="block">
            <span class="mb-2 block text-sm font-medium">الاسم <span class="text-brand-500">*</span></span>
            <input v-model="form.name" :class="[field, errors.name && '!border-red-500']" autocomplete="name" :aria-invalid="!!errors.name" />
            <span v-if="errors.name" class="mt-1.5 block text-[13px] text-red-600">{{ errors.name }}</span>
          </label>
          <label class="block">
            <span class="mb-2 block text-sm font-medium">رقم الهاتف <span class="text-brand-500">*</span></span>
            <input v-model="form.phone" type="tel" inputmode="tel" dir="ltr" placeholder="07XX XXX XXXX" :class="[field, 'text-end', errors.phone && '!border-red-500']" autocomplete="tel" :aria-invalid="!!errors.phone" />
            <span v-if="errors.phone" class="mt-1.5 block text-[13px] text-red-600">{{ errors.phone }}</span>
          </label>
          <label class="block">
            <span class="mb-2 block text-sm font-medium">المحافظة</span>
            <select v-model="form.gov" :class="field">
              <option value="">اختر المحافظة</option>
              <option v-for="g in governorates" :key="g">{{ g }}</option>
            </select>
          </label>
          <label class="block">
            <span class="mb-2 block text-sm font-medium">القسم</span>
            <select v-model="form.cat" :class="field">
              <option value="">اختر القسم</option>
              <option v-for="c in categories" :key="c.slug">{{ c.title }}</option>
            </select>
          </label>
          <label class="block sm:col-span-2">
            <span class="mb-2 block text-sm font-medium">الرسالة <span class="text-brand-500">*</span></span>
            <textarea v-model="form.msg" rows="5" :class="[field, errors.msg && '!border-red-500']" placeholder="اكتب القطعة أو المقاس اللي تحتاجه…" :aria-invalid="!!errors.msg"></textarea>
            <span v-if="errors.msg" class="mt-1.5 block text-[13px] text-red-600">{{ errors.msg }}</span>
          </label>
        </div>
        <button type="submit"
                class="group relative mt-8 inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-brand-700 px-8 py-4 font-semibold text-white shadow-xl shadow-brand-700/30 transition-transform hover:-translate-y-0.5 sm:w-auto">
          <span class="absolute inset-0 translate-x-full bg-brand-500 transition-transform duration-500 ease-(--ease-out-expo) group-hover:translate-x-0"></span>
          <BrandIcon name="whatsapp" :size="20" class="relative" /><span class="relative">إرسال عبر واتساب</span>
        </button>
      </form>
    </section>

    <!-- map -->
    <section id="map" class="mx-auto max-w-7xl scroll-mt-28 px-5 pb-24 sm:px-8">
      <div v-reveal class="relative overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-stone shadow-[0_40px_80px_-30px_rgba(7,31,68,0.4)]">
        <iframe :src="location.embed" :title="`موقع ${location.name} على الخريطة`" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                class="block h-[420px] w-full border-0 sm:h-[520px]" allowfullscreen></iframe>
        <!-- below the map on phones; top corner on larger screens so Google's zoom controls stay clickable -->
        <div class="p-3 sm:absolute sm:top-6 sm:right-6 sm:w-[360px] sm:p-0">
          <div class="pointer-events-auto rounded-3xl bg-white/95 p-6 shadow-2xl shadow-brand-900/20 backdrop-blur">
            <div class="flex items-center gap-3">
              <span class="grid size-11 place-items-center rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-700/30"><MapPin :size="22" /></span>
              <div>
                <p class="font-bold">{{ location.name }}</p>
                <p class="text-sm text-ink-soft">{{ location.city }} · {{ hours }}</p>
              </div>
            </div>
            <a :href="location.url" target="_blank" rel="noopener"
               class="group mt-5 flex items-center justify-between rounded-full bg-brand-700 py-3 ps-6 pe-3 font-semibold text-white transition-colors hover:bg-brand-600">
              افتح في خرائط Google
              <span class="grid size-8 place-items-center rounded-full bg-white/15 transition-transform duration-500 group-hover:rotate-45"><ArrowUpLeft :size="16" /></span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- faq -->
    <section class="bg-gradient-to-b from-brand-50 to-marble py-24 sm:py-28">
      <div class="mx-auto max-w-3xl px-5 sm:px-8">
        <div class="text-center">
          <p v-reveal class="font-serif text-lg tracking-[0.25em] text-brand-600 uppercase italic">FAQ</p>
          <h2 v-reveal="100" class="mt-3 text-4xl font-bold sm:text-5xl">أسئلة <span class="text-gradient">متكررة</span></h2>
        </div>
        <div class="mt-12 space-y-3">
          <div v-for="(f, k) in faq" :key="f.q" v-reveal="k * 70"
               class="rounded-2xl border bg-white transition-all duration-300"
               :class="openFaq === k ? 'border-brand-200 shadow-[0_20px_40px_-24px_rgba(4,68,148,0.35)]' : 'border-stone'">
            <button class="flex w-full items-center justify-between gap-6 p-5 text-start text-lg font-bold sm:p-6" :aria-expanded="openFaq === k" @click="openFaq = openFaq === k ? -1 : k">
              {{ f.q }}
              <span class="grid size-9 shrink-0 place-items-center rounded-full transition-all duration-500 ease-(--ease-out-expo)"
                    :class="openFaq === k ? 'rotate-45 bg-brand-700 text-white' : 'bg-brand-50 text-brand-700'"><Plus :size="18" /></span>
            </button>
            <div class="grid transition-[grid-template-rows] duration-500 ease-(--ease-out-expo)" :class="openFaq === k ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
              <p class="overflow-hidden text-ink-soft"><span class="block px-5 pb-6 leading-relaxed sm:px-6">{{ f.a }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
