import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Config per GitHub Pages (project pages):
// - site: URL completo del sito
// - base: sottopercorso del repo
export default defineConfig({
  site: 'https://eventhorizon-mtg.github.io/test',
  base: '/test/',
  integrations: [sitemap()],
});
