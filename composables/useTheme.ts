import { useDark, useToggle } from '@vueuse/core'

export const useTheme = () => {
  const isDark = useDark({ storageKey: 'theme' })
  const toggleDark = useToggle(isDark)
  return { isDark, toggleDark }
}