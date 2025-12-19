import type { Config } from 'tailwindcss'
import { tailwindColors, tailwindFontFamily } from './lib/design-system'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ========================================
      // BARVY (ZFP Design System)
      // ========================================
      colors: {
        brand: {
          orange: '#CF5400',       // Primární oranžová
          'orange-hover': '#E07E3C', // Hover efekt
        },
        text: {
          dark: '#333333',         // Tmavě šedá text
          gray: '#666666',         // Střední šedá
          light: '#999999',        // Světlá šedá
        },
        bg: {
          light: '#F7F7F7',        // Světlé pozadí
        },
        status: {
          success: '#10B981',      // Zelená
          error: '#EF4444',        // Červená
          warning: '#F59E0B',      // Oranžová
          info: '#3B82F6',         // Modrá
        }
      },
      
      // ========================================
      // TYPOGRAFIE
      // ========================================
      fontFamily: {
        heading: ['var(--font-heading)', 'Verdana', 'sans-serif'],
        body: ['var(--font-body)', 'Verdana', 'sans-serif'],
      },
      
      // ========================================
      // SPACING
      // ========================================
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
      },
      
      // ========================================
      // CONTAINER
      // ========================================
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      
      // ========================================
      // BREAKPOINTS (rozšíření)
      // ========================================
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      
      // ========================================
      // BOX SHADOW
      // ========================================
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'cta': '0 4px 14px rgba(207, 84, 0, 0.25)',
      },
      
      // ========================================
      // BORDER RADIUS
      // ========================================
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      
      // ========================================
      // TRANSITIONS
      // ========================================
      transitionDuration: {
        '250': '250ms',
      },
      
      // ========================================
      // ANIMATIONS
      // ========================================
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      
      // ========================================
      // TYPOGRAPHY (Prose)
      // ========================================
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            h1: {
              color: '#333333',
              fontWeight: '700',
            },
            h2: {
              color: '#333333',
              fontWeight: '700',
            },
            h3: {
              color: '#333333',
              fontWeight: '600',
            },
            strong: {
              color: '#333333',
              fontWeight: '700',
            },
            a: {
              color: '#CF5400',
              '&:hover': {
                color: '#E07E3C',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
