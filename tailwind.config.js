/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */

const colors = {
  alert: {
    error: 'hsl(3 100% 59%)',
    success: 'hsl(135 59% 49%)',
    warning: 'hsl(48 100% 50%)',
  },
  'grayscale-black': {
    100: 'hsl(0 0% 96%)',
    200: 'hsl(220 4% 70%)',
    300: 'hsl(220 4% 56%)',
    400: 'hsl(216 14% 27%)',
    500: 'hsl(216 100% 4%)',
    600: 'hsl(217 100% 4%)',
    700: 'hsl(214 100% 3%)',
    800: 'hsl(218 100% 2%)',
    900: 'hsl(218 100% 2%)',
  },
  others: {
    'dark-background': 'hsl(0 0% 10%)',
    white: 'hsl(0 0% 100%)',
  },
  'primary-blue': {
    100: 'hsl(213 24% 93%)',
    200: 'hsl(212 24% 77%)',
    300: 'hsl(212 24% 66%)',
    400: 'hsl(212 34% 41%)',
    500: 'hsl(212 65% 27%)',
    600: 'hsl(213 65% 25%)',
    700: 'hsl(212 65% 19%)',
    800: 'hsl(212 65% 15%)',
    900: 'hsl(212 65% 11%)',
  },
  'secondary-red': {
    100: 'hsl(357 84% 95%)',
    200: 'hsl(358 84% 85%)',
    300: 'hsl(358 85% 68%)',
    400: 'hsl(358 86% 62%)',
    500: 'hsl(358 85% 52%)',
    600: 'hsl(358 79% 47%)',
    700: 'hsl(358 78% 37%)',
    800: 'hsl(358 78% 29%)',
    900: 'hsl(358 79% 22%)',
  },
}

export default {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    colors,
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      container: {
        center: true,
        padding: '7.5rem',
        screens: {
          md: '1280px',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontSize: {
        'sub-heading-01': [
          '20px',
          {
            lineHeight: '28px',
            fontWeight: '500',
          },
        ],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
