import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
export default defineConfig({
  base: '/Renewal_Portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});