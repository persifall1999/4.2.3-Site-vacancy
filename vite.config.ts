/// <reference types="vitest" /> 
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/4.2.3-Site-vacancy/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
