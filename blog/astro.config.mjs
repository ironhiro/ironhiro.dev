// @ts-check
// Blog (blog.ironhiro.dev). The resume builds from the same code with astro.resume.config.mjs.
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://blog.ironhiro.dev',
  srcDir: './src/blog',
  publicDir: './public/blog',
  outDir: './dist/blog',
  integrations: [react()],
  markdown: {
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark-dimmed' }, defaultColor: false },
  },
});
