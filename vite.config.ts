import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src/styles'),
      '~effect': path.resolve(__dirname, 'src/styles/effects'),
      '~element': path.resolve(__dirname, 'src/styles/elements'),
      '~util': path.resolve(__dirname, 'src/styles/utils'),
      '~tag': path.resolve(__dirname, 'src/styles/tags'),
      "modules": path.resolve(__dirname, 'node_modules'),
    },
  },
});
