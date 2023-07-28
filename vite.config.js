import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [react(), reactRefresh()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
});