import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://iljeong.github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [sitemap()],
});
