import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      themes: path.resolve(__dirname, 'src/themes'),
      mixins: path.resolve(__dirname, 'src/mixins'),
    },
  },
});
