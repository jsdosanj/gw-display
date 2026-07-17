import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Deployed via Cloudflare Workers (static assets) at the domain root.
  // TODO: once the final workers.dev subdomain or custom domain is known,
  // update this to match — it only affects canonical/OG URLs, not the app.
  site: 'https://gw-display.workers.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
