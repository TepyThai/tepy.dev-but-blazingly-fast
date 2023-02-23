/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // https://tailwindcss.com/docs/customizing-colors#color-palette-reference
      // https://uicolors.app/edit?sv1=spray:50-edfefd/100-d2fbfb/200-abf6f6/300-71edef/400-30dbe0/500-14bec6/600-1499a6/700-177a87/800-1c636e/900-1b535e
      colors: {
        background: '#fef6e4',
        headline: '#001858',
        p: '#172c66',
        spray: {
          50: '#edfefd',
          100: '#d2fbfb',
          200: '#abf6f6',
          300: '#71edef',
          400: '#30dbe0',
          500: '#14bec6',
          600: '#1499a6',
          700: '#177a87',
          800: '#1c636e',
          900: '#1b535e',
        },
      },
    },
  },
  plugins: [],
};
