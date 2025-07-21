
import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  server: {
    host: '0.0.0.0',
    port: 5000,
    open: false,
    allowedHosts: ['all'],
    hmr: {
      host: '0.0.0.0'
    }
  },
  build: {
    outDir: 'dist'
  }
})
