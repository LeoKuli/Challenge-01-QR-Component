
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5001,
    strictPort: true,
    allowedHosts: [
      '.replit.dev',
      '.replit.co'
    ]
  },
  build: {
    outDir: 'dist'
  }
})
