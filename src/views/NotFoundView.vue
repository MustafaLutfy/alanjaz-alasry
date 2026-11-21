<script setup>
import Btn from '../components/Btn.vue'
import Accent from '../components/Accent.vue'
</script>

<template>
  <main class="surface-marble flex min-h-[85vh] items-center pt-28">
    <div v-reveal class="mx-auto max-w-7xl px-5 text-center sm:px-8">
      <p class="font-serif text-[9rem] leading-none font-bold text-brand-700/15">404</p>
      <h1 class="t-h1 mt-2">الصفحة <Accent>غير موجودة</Accent></h1>
      <p class="t-lead mx-auto mt-5 max-w-md text-ink-soft">يمكن الرابط تغيّر أو انحذف. ارجع للرئيسية أو تصفّح المعرض.</p>
      <div class="mt-10 flex flex-wrap justify-center gap-3">
        <Btn to="/">الرئيسية</Btn>
        <Btn to="/gallery" variant="outline">المعرض</Btn>
      </div>
    </div>
  </main>
</template>
