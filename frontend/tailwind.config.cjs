/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['tt_commons_regular', ...defaultTheme.fontFamily.sans],
        'canela-light': ['canela_light', ...defaultTheme.fontFamily.sans],
        'canela-medium': ['canela_medium', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#13151e',
        white: '#fefefe',
      },
      fontSize: {
        body: '2.2rem',
        p: '2.4rem',
      },
    },
  },
  plugins: [],
};
