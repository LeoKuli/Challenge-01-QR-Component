
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    strictPort: true,
    allowedHosts: [
      '4872ee45-e40c-4301-a207-92e16013ceed-00-d3dmgfd10hnd.kirk.replit.dev',
      '.replit.dev',
      '.replit.co'
    ]
  },
  build: {
    outDir: 'dist'
  }
})
