// @ts-check
import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug';
import sitemap from 'astro-sitemap';
//import content from '@astrojs/content'; // ✅ content 플러그인 추가
// import react from '@astrojs/react'; // 필요 시 사용

// https://astro.build/config
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
  // integrations: [react()]
});
