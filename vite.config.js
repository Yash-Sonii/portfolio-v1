import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ✅ Fix the import

export default defineConfig({
  base: "./", // ✅ Correct base path for Netlify & GitHub Pages
  plugins: [react()], // ✅ Use lowercase `react()`
});
