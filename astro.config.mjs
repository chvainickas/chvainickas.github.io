// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://chvainickas.github.io',
  // If using a repo name other than username.github.io, uncomment:
  // base: '/REPO_NAME',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});