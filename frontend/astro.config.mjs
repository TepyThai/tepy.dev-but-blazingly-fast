import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import node from '@astrojs/node';
import image from '@astrojs/image';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  integrations: [
    solid(),
    tailwind(),
    react(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  output: 'server',
  adapter: node({
    mode: 'middleware',
  }),
  // vite: {
  //   build: {
  //     rollupOptions: {
  //       external: ['src/assets/images/profile.jpg'],
  //     },
  //   },
  // },
});
