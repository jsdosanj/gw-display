import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // Deployed via Cloudflare Workers (static assets) at the domain root.
  site: 'https://gw-display.jasvant-dosanjh.workers.dev',
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
