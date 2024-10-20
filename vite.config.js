import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Oldage--Home-Management/',  
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for build
    chunkSizeWarningLimit: 1600, // Customize chunk size warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
