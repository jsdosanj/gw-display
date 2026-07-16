import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jsdosanj.github.io',
  base: '/gw-display',
  vite: {
    plugins: [tailwindcss()],
  },
});
