import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // port to 5000 (default is 3000)
    host: '0.0.0.0', // Bind to all network interfaces to allow access from other devices on the same network
    //open: yes, // Automatically open the app in your default browser when the server starts
    proxy: {
      '/api': 'http://127.0.0.1:8000',  // Proxy API requests to Django backend
    },
  },
})
