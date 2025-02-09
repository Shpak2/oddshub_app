<template>
  <button
    @click="toggleMenu"
    v-ripple
    :class="isOpen ? 'open' : ''"
    class="grid justify-center content-center w-vmin-[40px] aspect-square focus:outline-none">
    <span class="block w-vmin-[30px] h-vmin-[3px] relative"></span>
  </button>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isOpen = ref(false)

  const toggleMenu = () => {
    isOpen.value = !isOpen.value
  }
</script>


<style lang="scss" scoped>

span {
  background: var(--color-light);
  border-radius: 5px;
  transition: all .2s ease-in-out;
  &::before, &::after {
    content: '';
    left: 0;
    position: absolute;
    width: 100%;
    height: 0.8vmin;
    background: var(--color-light);
    border-radius: 5px;
    transition: all .2s ease-in-out;
  }
  &::before {
    transform: translateY(-300%);
  }
  &::after {
    transform: translateY(300%);
  }
  .open & {
    transform: translateX(50px);
    background: transparent;
    &::before {
      transform: rotate(45deg) translate(-35px, 35px);
    }
    &::after {
      transform: rotate(-45deg) translate(-35px, -35px);
    }
  }
}
</style>
