import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/grand-amak.github.io/',
  output: "export",
  build: {
    outDir: 'dist',
  },
});