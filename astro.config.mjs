// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind({
      // Don't inject default base styles — we use our own global.css
      applyBaseStyles: false,
    }),
  ],
});
