import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://exploitiga.github.io/website',
  output: 'static',
  build: {
    assets: '_astro',
  },
  compressPublicAssets: true,
});