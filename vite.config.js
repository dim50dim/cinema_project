import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cinema_project/',  // ← le nom exact de ton repo GitHub
})