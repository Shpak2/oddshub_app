<template>
  <button
    @click="toggleSearch"
    v-ripple
    :class="isOpen ? 'open' : ''"
    class="grid justify-center content-center w-vmin-[40px] aspect-square focus:outline-none">
    <Icon name="ri:search-2-line" class="w-vmin-[30px] h-vmin-[30px] text-light" />
  </button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isOpen = ref(false)

  const toggleSearch = () => {
    isOpen.value = !isOpen.value
  }
</script>
