<template>
  <button
    @click="toggleLogin" v-ripple
    class="grid justify-center content-center bg-secondary focus:outline-none rounded-md px-2 py-1">
    <span class="uppercase text-primary text-lg font-medium">Sign In</span>
  </button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isOpen = ref(false)

  const toggleLogin = () => {
    isOpen.value = !isOpen.value
  }
</script>
