<template>
  <div>
    <header class="p-4 bg-gray-200">
      <h1>My Custom Layout</h1>
    </header>
    <div class="min-h-screen flex flex-col items-center justify-center gap-4">
    <!-- Мобільна версія: стандартно (mobile-first) -->
    <div class="w-vmin-[20px] md:w-vw-tabs-[20px] lg:w-vw-desktop-[20px] h-vmin-[20px] bg-blue-500 flex items-center justify-center">
      <span class="text-white">Mobile (vmin)</span>
    </div>

    <!-- Для планшетів: використовуйте префікс md: -->
    <div class="md:w-vw-tabs-[20px] md:h-vw-tabs-[20px] bg-green-500 flex items-center justify-center">
      <span class="text-white">Tablet (vw)</span>
    </div>

    <!-- Для десктопів: використовуйте префікс lg: -->
    <div class="w-resp-[20px/36px/45px] h-resp-[20px/36px/45px] bg-red-500 flex items-center justify-center">
      <span class="text-white">Desktop (vw)</span>
    </div>
  </div>
    <NuxtPage />
  </div>
</template>