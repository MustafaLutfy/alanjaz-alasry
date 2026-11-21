<script setup>
import { ref, reactive } from 'vue'
import { Phone, Clock, MapPin, Plus, ArrowUpLeft } from '@lucide/vue'
import PageHero from '../components/PageHero.vue'
import Eyebrow from '../components/Eyebrow.vue'
import Accent from '../components/Accent.vue'
import Btn from '../components/Btn.vue'
import BrandIcon from '../components/BrandIcon.vue'
import { phones, socials, waLink, governorates, categories, faq, location, hours } from '../data'
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
const field = 'h-13 w-full rounded-2xl border border-ink/[0.1] bg-marble px-4 text-[15px] outline-none transition-all focus:border-brand-700 focus:bg-white focus:ring-4 focus:ring-brand-700/10'
</script>

<template>
  <main>
    <PageHero title="تواصل" accent="معنا" eyebrow="تواصل معنا" :crumbs="[{ label: 'اتصل بنا' }]">
      للطلب والاستفسار راسلونا على الخاص أو اتصلوا بنا مباشرة — فريقنا جاهز يساعدك.
    </PageHero>

    <section class="mx-auto grid max-w-7xl gap-8 px-5 pb-24 sm:px-8 lg:grid-cols-5">
      <!-- info cards -->
      <div class="grid content-start gap-4 lg:col-span-2">
        <a v-for="(p, i) in phones" :key="p.tel" v-reveal="i * 100" :href="`tel:${p.tel}`"
           class="group flex items-center gap-4 rounded-card bg-white/80 ring-1 ring-ink/[0.06] p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_28px_56px_-28px_rgba(4,68,148,0.35)]">
          <span class="grid size-12 place-items-center rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-700/30 transition-transform duration-500 group-hover:-rotate-6"><Phone :size="22" /></span>
          <div>
            <p class="text-sm text-ink-soft">اتصل بنا</p>
            <p class="font-serif text-2xl font-bold" dir="ltr">{{ p.label }}</p>
          </div>
        </a>
        <div v-reveal="200" class="grid grid-cols-2 gap-4">
          <a :href="waLink()" target="_blank" rel="noopener" class="group rounded-card bg-white/80 ring-1 ring-ink/[0.06] p-5 transition-colors duration-300 hover:bg-white">
            <BrandIcon name="whatsapp" :size="24" class="text-brand-700" />
            <p class="mt-3 text-sm text-ink-soft">واتساب</p>
            <p class="mt-0.5 font-bold">راسلنا مباشرة</p>
          </a>
          <a v-for="s in socials" :key="s.name" :href="s.url" target="_blank" rel="noopener" class="group rounded-card bg-white/80 ring-1 ring-ink/[0.06] p-5 transition-colors duration-300 hover:bg-white">
            <BrandIcon :name="s.name" :size="24" class="text-brand-700" />
            <p class="mt-3 text-sm text-ink-soft">{{ s.label }}</p>
            <p class="mt-0.5 truncate font-bold" :dir="s.handle.startsWith('@') ? 'ltr' : null">{{ s.handle }}</p>
          </a>
        </div>
        <div v-reveal="280" class="rounded-card bg-white/80 ring-1 ring-ink/[0.06] p-6">
          <div class="flex items-center gap-3"><span class="grid size-10 place-items-center rounded-xl bg-brand-700/[0.07] text-brand-700"><Clock :size="20" /></span><h2 class="font-bold">أوقات الدوام</h2></div>
          <dl class="mt-4 divide-y divide-stone text-[15px]">
            <div class="flex justify-between py-3"><dt>السبت — الخميس</dt><dd class="font-semibold text-brand-700">8 صباحاً – 3 عصراً</dd></div>
            <div class="flex justify-between py-3 text-ink-soft"><dt>الجمعة</dt><dd>مغلق</dd></div>
          </dl>
        </div>
        <a v-reveal="340" href="#map" class="flex gap-4 rounded-card bg-brand-700/[0.06] p-6 transition-colors hover:bg-brand-700/[0.1]">
          <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-brand-700"><MapPin :size="20" /></span>
          <div>
            <h2 class="font-bold">موقع المعرض</h2>
            <p class="mt-1 text-sm leading-relaxed text-ink-soft">{{ location.city }} — شوف الموقع على الخريطة بالأسفل.</p>
          </div>
        </a>
      </div>

      <!-- form -->
      <form v-reveal="150" class="rounded-media bg-white p-6 shadow-[0_30px_80px_-40px_rgba(4,68,148,0.35)] ring-1 ring-ink/[0.05] sm:p-10 lg:col-span-3" novalidate @submit.prevent="submit">
        <h2 class="t-h3 !text-3xl">أرسل استفسارك</h2>
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
            <textarea v-model="form.msg" rows="5" :class="[field, '!h-auto py-3.5', errors.msg && '!border-red-500']" placeholder="اكتب القطعة أو المقاس اللي تحتاجه…" :aria-invalid="!!errors.msg"></textarea>
            <span v-if="errors.msg" class="mt-1.5 block text-[13px] text-red-600">{{ errors.msg }}</span>
          </label>
        </div>
        <Btn type="submit" class="mt-8 w-full sm:w-auto">
          إرسال عبر واتساب
          <template #icon><BrandIcon name="whatsapp" :size="18" /></template>
        </Btn>
      </form>
    </section>

    <!-- map -->
    <section id="map" class="mx-auto max-w-7xl scroll-mt-28 px-5 pb-24 sm:px-8">
      <div v-reveal class="relative overflow-hidden rounded-media border-[6px] border-white bg-stone shadow-[0_40px_80px_-30px_rgba(7,31,68,0.4)]">
        <iframe :src="location.embed" :title="`موقع ${location.name} على الخريطة`" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                class="block h-[420px] w-full border-0 sm:h-[520px]" allowfullscreen></iframe>
        <!-- below the map on phones; top corner on larger screens so Google's zoom controls stay clickable -->
        <div class="p-3 sm:absolute sm:top-6 sm:right-6 sm:w-[360px] sm:p-0">
          <div class="glass rounded-card p-6">
            <div class="flex items-center gap-3">
              <span class="grid size-11 place-items-center rounded-2xl bg-brand-700 text-white shadow-lg shadow-brand-700/30"><MapPin :size="22" /></span>
              <div>
                <p class="font-bold">{{ location.name }}</p>
                <p class="text-sm text-ink-soft">{{ location.city }} · {{ hours }}</p>
              </div>
            </div>
            <Btn :href="location.url" size="md" :icon="ArrowUpLeft" class="mt-5 w-full">افتح في خرائط Google</Btn>
          </div>
        </div>
      </div>
    </section>

    <!-- faq -->
    <section class="section-y bg-white">
      <div class="mx-auto max-w-3xl px-5 sm:px-8">
        <div class="text-center">
          <div v-reveal>
            <Eyebrow>أسئلة متكررة</Eyebrow>
            <h2 class="t-h2 mt-4">عندك <Accent>سؤال؟</Accent></h2>
          </div>
        </div>
        <div class="mt-12 space-y-3">
          <div v-for="(f, k) in faq" :key="f.q" v-reveal="k * 70"
               class="rounded-card bg-marble ring-1 transition-all duration-300"
               :class="openFaq === k ? 'bg-white ring-brand-700/15 shadow-[0_24px_48px_-28px_rgba(4,68,148,0.4)]' : 'ring-ink/[0.06]'">
            <button class="flex w-full items-center justify-between gap-6 p-5 text-start text-lg font-bold sm:p-6" :aria-expanded="openFaq === k" @click="openFaq = openFaq === k ? -1 : k">
              {{ f.q }}
              <span class="grid size-9 shrink-0 place-items-center rounded-full transition-all duration-500 ease-(--ease-out-expo)"
                    :class="openFaq === k ? 'rotate-45 bg-brand-700 text-white' : 'bg-brand-700/[0.07] text-brand-700'"><Plus :size="18" /></span>
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
