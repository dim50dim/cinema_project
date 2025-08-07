import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cinema_project/',  // ✅ this is the fix
  plugins: [react()],
})