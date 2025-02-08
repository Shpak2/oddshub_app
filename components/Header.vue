<template>
  <header>
    <Logo />
    <ClientOnly>
      <button
        @click="(e: MouseEvent) => toggleDark()"
        class="px-4 py-2 border rounded"
      >
        Switch to {{ isDark ? 'light' : 'dark' }} mode
      </button>
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
  import Logo from '@/components/Header/Logo.vue';
  import { useTheme } from '~/composables/useTheme'
const { isDark, toggleDark } = useTheme()
</script>
