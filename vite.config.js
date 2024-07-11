import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/app-lanchonete/',
  define: {
    'process.env.REACT_APP_API_URL': JSON.stringify('https://api-lanchonete.vercel.app/'),
  }
})
