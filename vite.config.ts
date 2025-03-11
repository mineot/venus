import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src/styles'),
      modules: path.resolve(__dirname, 'node_modules'),
    },
  },
});
