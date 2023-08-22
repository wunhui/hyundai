import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/components/layouts',
        '@scss': '/src/assets/scss'
      }
  },
});