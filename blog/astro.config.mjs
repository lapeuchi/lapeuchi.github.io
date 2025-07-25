import { defineConfig } from 'astro/config';
import sitemap from 'astro-sitemap';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

export default defineConfig({
  outDir: 'dist',
  site: 'https://lapeuchi.github.io',
  integrations: [sitemap()],
  base: '/',

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeSlug, rehypeMathjax], // rehype-katex ❌
  },
  
  vite: {
    assetsInclude: ['**/*.yml'],
  },
});
