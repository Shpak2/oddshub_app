// plugins/ripple.ts
import type { DirectiveBinding } from 'vue'
import { defineNuxtPlugin } from '#app'

const RippleDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // На сервері (SSR) не виконуємо ніяких операцій, щоб уникнути помилок.
    if (process.server) return;

    // Реальна логіка для клієнта:
    el.style.position = 'relative';
    el.style.overflow = 'hidden';

    el.addEventListener('click', (e: MouseEvent) => {
      const ripple = document.createElement('span');
      const diameter = Math.max(el.clientWidth, el.clientHeight);
      const radius = diameter / 2;
      ripple.style.width = ripple.style.height = `${diameter}px`;
      ripple.style.left = `${e.clientX - el.getBoundingClientRect().left - radius}px`;
      ripple.style.top = `${e.clientY - el.getBoundingClientRect().top - radius}px`;
      ripple.classList.add('ripple');
      el.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  // Реєструємо директиву «ripple» незалежно від середовища.
  nuxtApp.vueApp.directive('ripple', RippleDirective);
});
