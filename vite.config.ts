import { defineConfig } from 'vite'

export default defineConfig({
  base: '/animal-farm-kids/',
  publicDir: 'public',
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true
  },
  server: {
    port: 5173,
    open: true
  },
  plugins: []
})
