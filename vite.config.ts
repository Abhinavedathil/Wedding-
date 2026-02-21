import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Increase header size limit to fix 431 error
    cors: true,
    headers: {
      'Cache-Control': 'no-store',
    },
  },
})
