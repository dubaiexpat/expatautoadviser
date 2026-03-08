import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ssgPlugin } from 'vite-plugin-ssg/react';

export default defineConfig({
  plugins: [
    react(),
    ssgPlugin({
      mock: true,
      format: 'esm',
      includeAllRoutes: true,
    }),
  ],
});
