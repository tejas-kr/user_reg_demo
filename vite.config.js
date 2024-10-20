import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://user-reg-backend-demo.onrender.com', // Replace with your API URL
        changeOrigin: true,
        secure: true,
      }
    }
  }
})
