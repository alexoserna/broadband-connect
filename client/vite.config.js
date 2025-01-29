import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true, // Forces SVGs to be React components
      svgo: false, // Disable SVGO optimization to prevent weird issues
    }),
  ],
  resolve: {
    alias: {
      "@icons": "/src/assets/icons", // Allows cleaner imports
    },
  },
})
