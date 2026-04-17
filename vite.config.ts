import { defineConfig } from 'vite';
import 'dotenv/config';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: Number(process.env.PORT) || 8000,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@shared': path.resolve(__dirname, 'src/shared'),
    },
  },
});
