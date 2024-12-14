import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/grand-amak.github.io/', // замените на имя вашего репозитория
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});