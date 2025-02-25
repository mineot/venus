import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src/styles'),
      '~mixin': path.resolve(__dirname, 'src/styles/mixins'),
      '~effect': path.resolve(__dirname, 'src/styles/mixins/effects'),
      '~element': path.resolve(__dirname, 'src/styles/mixins/elements'),
      '~util': path.resolve(__dirname, 'src/styles/mixins/utils'),
    },
  },
});
