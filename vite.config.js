import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio-v1/',  // 👈 Add this line (repo name)
  build: {
    outDir: 'dist',   // Ensure correct output folder
  },
});
