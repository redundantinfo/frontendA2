import { defineConfig } from "vite";
import liveReload from 'vite-plugin-live-reload';
import react from '@vitejs/plugin-react'

export default defineConfig({
  css: {
    devSourcemap: true
  },
  build: {
    outDir: "./dist",
    target: "esnext",
    polyfillDynamicImport: false
  },
  plugins: [
    liveReload('./html/**/*.html', { alwaysReload: true }),
    react()
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://cinema-rest.nodehill.se',
        changeOrigin: true,
        secure: true
      }
    }
  }
});