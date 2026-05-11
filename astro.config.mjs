import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kkmmedia.de',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
  ],
});
