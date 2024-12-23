import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Çıkış dizini
    rollupOptions: {
      input: 'src/main.tsx', // Ana giriş dosyanız
    }
  }
});
