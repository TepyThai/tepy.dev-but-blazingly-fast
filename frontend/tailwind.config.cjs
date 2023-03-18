/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['tt_commons_regular', ...defaultTheme.fontFamily.sans],
        canela: ['canela', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#13151e',
        white: '#fefefe',
        'white-ish': '#f8f7f6',
        teal: {
          primary: '#016d75',
        },
        yellow: {
          primary: '#e9d055',
        },
        blue: {
          primary: '#273748',
        },
        brass: '#c88469',
      },
      keyframes: {
        'slide-up': {
          '0%, 50%': { top: '2rem', opacity: 0 },
          '100%': { top: '0', opacity: 1 },
        },
        'fade-in': {
          '0%, 50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'slide-up': 'slide-up 1.5s',
        'fade-in': 'fade-in 1s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
