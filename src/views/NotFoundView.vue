<template>
  <main class="bg-marble flex min-h-[80vh] items-center pt-28">
    <div class="mx-auto max-w-7xl px-5 text-center sm:px-8">
      <p class="text-gradient font-serif text-[9rem] leading-none font-bold">404</p>
      <h1 class="mt-4 text-4xl font-extrabold sm:text-5xl">الصفحة غير موجودة</h1>
      <p class="mx-auto mt-4 max-w-md text-lg text-ink-soft">يمكن الرابط تغيّر أو انحذف. ارجع للرئيسية أو تصفّح المعرض.</p>
      <div class="mt-10 flex flex-wrap justify-center gap-3">
        <router-link to="/" class="rounded-full bg-brand-700 px-8 py-4 font-semibold text-white shadow-xl shadow-brand-700/30 transition-transform hover:-translate-y-0.5">الرئيسية</router-link>
        <router-link to="/gallery" class="rounded-full border border-ink/10 bg-white/70 px-8 py-4 font-semibold transition-colors hover:text-brand-700">المعرض</router-link>
      </div>
    </div>
  </main>
</template>
