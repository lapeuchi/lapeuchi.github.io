// @ts-check
import { defineConfig } from 'astro/config';

//import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  //integrations: [react()]

  base: '/',
  output: 'static', // 정적 사이트로 빌드
});