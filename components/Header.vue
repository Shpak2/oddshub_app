<template>
  <header class="flex items-center sticky top-0 justify-between bg-primary shadow-custom-secondary p-2 border-b overflow-hidden">
    <Logo class="h-vmin-[26px]" />
    <div class="flex items-center space-x-2">
      <BtnSearch />
      <BtnLogin />
      <BtnMenu />
    </div>
    <!-- <ClientOnly>
      <button
        @click="(e: MouseEvent) => toggleDark()"
        class="px-4 py-2 border rounded"
      >
        Switch to {{ isDark ? 'light' : 'dark' }} mode
      </button>
    </ClientOnly> -->
  </header>
</template>

<script setup lang="ts">
  import Logo from '@/components/Header/Logo.vue';
  import BtnMenu from '@/components/Header/BtnMenu.vue';
  import BtnSearch from '@/components/Header/BtnSearch.vue';
  import BtnLogin from '@/components/Header/BtnLogin.vue';
  import { useTheme } from '~/composables/useTheme';

  const { isDark, toggleDark } = useTheme()
</script>
