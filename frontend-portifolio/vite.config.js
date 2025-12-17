import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      png: {
        quality: 80, // Ajuste de 0 a 100
      },
      jpeg: {
        quality: 75,
      },
      webp: {
        quality: 80,
      },
      svg: {
        multipass: true,
      },
    }),
  ],
});