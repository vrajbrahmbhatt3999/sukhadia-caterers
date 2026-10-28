/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#18342D',
          50: '#e8f0ef',
          100: '#c5d8d4',
          200: '#9ebfb9',
          300: '#77a69e',
          400: '#4e8d84',
          500: '#3a756c',
          600: '#275c55',
          700: '#18342D',
          800: '#122620',
          900: '#0c1915',
        },
        gold: {
          DEFAULT: '#C4A46B',
          50: '#faf6ee',
          100: '#f2e9d4',
          200: '#e5d4a9',
          300: '#d8bf7e',
          400: '#C4A46B',
          500: '#b08a50',
          600: '#8f6e3c',
          700: '#6e5229',
          800: '#4d3717',
          900: '#2c1c05',
        },
        ivory: {
          DEFAULT: '#F7F4ED',
          50: '#ffffff',
          100: '#fdfcf8',
          200: '#F7F4ED',
          300: '#ede7d6',
          400: '#e3dabf',
        },
        charcoal: {
          DEFAULT: '#242622',
          light: '#4a4c47',
          muted: '#6b6d67',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      animation: {
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'line-expand': 'lineExpand 0.8s ease-out forwards',
      },
      keyframes: {
        kenBurns: {
          '0%': { transform: 'scale(1) translateX(0)' },
          '100%': { transform: 'scale(1.08) translateX(-1%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineExpand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
