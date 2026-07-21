import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://exploituga.pt',
  base: '/website',
  output: 'static',
  build: {
    assets: '_astro',
  },
  compressPublicAssets: true,
});
