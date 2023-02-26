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
      },
    },
  },
  plugins: [],
};
