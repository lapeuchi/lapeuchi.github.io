import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';
import rehypeSlug from 'rehype-slug';


export default defineConfig({
  outDir: 'dist',
  site: 'https://lapeuchi.github.io',
  integrations: [sitemap()],
  base: '/',

  markdown: {
    rehypePlugins: [rehypeSlug],
  },
  
  vite: {
    assetsInclude: ['**/*.yml'],
  },
});
