// @ts-check
// Resume (ironhiro.dev). Shares src/components, hooks, styles, types and utils with the blog.
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ironhiro.dev',
  srcDir: './src/resume',
  publicDir: './public/resume',
  outDir: './dist/resume',
  cacheDir: './node_modules/.astro-resume',
  integrations: [react()],
});
