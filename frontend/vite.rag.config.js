import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const frontend = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  root: frontend,
  envDir: false, // Credentials never belong in frontend configuration.
  publicDir: false,
  plugins: [react()],
  css: { postcss: { plugins: [] } }, // Plain CSS; never search parent configs.
  server: {
    host: '127.0.0.1', port: 5174, strictPort: true,
    fs: { strict: true, allow: [frontend] },
  },
  preview: { host: '127.0.0.1', port: 5174, strictPort: true },
  build: {
    outDir: 'dist', emptyOutDir: false,
    rollupOptions: { input: fileURLToPath(new URL('./rag-demo.html', import.meta.url)) },
  },
})
