import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

// base brakepoints
const mobileBase = 375
const tabletBase = 768
const desktopBase = 1440

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      md: { min: '768px', max: '1024px' },
      lg: '1025px',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'custom-secondary': '0px 2px 6px 0px rgba(var(--color-secondary-rgb), 0.1)',
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        border: 'var(--color-border)',
        background: 'var(--color-background)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        light: 'var(--color-light)',
        select: 'var(--color-select)',
        'fixture-bg': 'var(--color-fixture-bg)',
        tertiary: 'var(--color-tertiary)',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, addBase }) => {

      // addBase(globalStyles);
      // Mobile
      matchUtilities(
        {
          'w-vmin': (value) => {
            const pixelValue = parseFloat(value.toString().replace('px', ''))
            const result = (pixelValue * 100) / mobileBase
            return { width: `${result}vmin` }
          },
          'h-vmin': (value) => {
            const pixelValue = parseFloat(value.toString().replace('px', ''))
            const result = (pixelValue * 100) / mobileBase
            return { height: `${result}vmin` }
          },
        },
        { type: 'any' }
      )

      // Tablet
      matchUtilities(
        {
          'w-vw-tabs': (value) => {
            const pixelValue = parseFloat(value.toString().replace('px', ''))
            const result = (pixelValue * 100) / tabletBase
            return { width: `${result}vw` }
          },
          'h-vw-tabs': (value) => {
            const pixelValue = parseFloat(value.toString().replace('px', ''))
            const result = (pixelValue * 100) / tabletBase
            return { height: `${result}vw` }
          },
        },
        { type: 'any' }
      )

      // Desktop
      matchUtilities(
        {
          'w-vw-desktop': (value) => {
            const pixelValue = parseFloat(value.toString().replace('px', ''))
            const result = (pixelValue * 100) / desktopBase
            return { width: `${result}vw` }
          },
          'h-vw-desktop': (value) => {
            const pixelValue = parseFloat(value.toString().replace('px', ''))
            const result = (pixelValue * 100) / desktopBase
            return { height: `${result}vw` }
          },
        },
        { type: 'any' }
      )

      // Responsive
      matchUtilities(
        {
          'w-resp': (value: string, { modifier }: { modifier: string | null }) => {
            const parts = value.split('/');
            if (parts.length !== 3) return null;
            const mobilePart = parseFloat(parts[0].replace('px', ''));
            const tabletPart = parseFloat(parts[1].replace('px', ''));
            const desktopPart = parseFloat(parts[2].replace('px', ''));
            if (isNaN(mobilePart) || isNaN(tabletPart) || isNaN(desktopPart)) return null;
            const mobileCalc = (mobilePart * 100) / mobileBase;
            const tabletCalc = (tabletPart * 100) / tabletBase;
            const desktopCalc = (desktopPart * 100) / desktopBase;
            return {
              width: `${mobileCalc}vmin`,
              '@media (min-width: 768px) and (max-width: 1024px)': {
                width: `${tabletCalc}vw`,
              },
              '@media (min-width: 1025px)': {
                width: `${desktopCalc}vw`,
              },
            };
          },
          'h-resp': (value: string, { modifier }: { modifier: string | null }) => {
            const parts = value.split('/');
            if (parts.length !== 3) return null;
            const mobilePart = parseFloat(parts[0].replace('px', ''));
            const tabletPart = parseFloat(parts[1].replace('px', ''));
            const desktopPart = parseFloat(parts[2].replace('px', ''));
            if (isNaN(mobilePart) || isNaN(tabletPart) || isNaN(desktopPart)) return null;
            const mobileCalc = (mobilePart * 100) / mobileBase;
            const tabletCalc = (tabletPart * 100) / tabletBase;
            const desktopCalc = (desktopPart * 100) / desktopBase;
            return {
              height: `${mobileCalc}vmin`,
              '@media (min-width: 768px) and (max-width: 1024px)': {
                height: `${tabletCalc}vw`,
              },
              '@media (min-width: 1025px)': {
                height: `${desktopCalc}vw`,
              },
            };
          },
        },
        { type: 'any', modifiers: 'any' }
      );
    }),
  ],
}

export default config
