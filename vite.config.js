import { copyFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function githubPagesFallback() {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      copyFileSync('dist/index.html', 'dist/404.html')
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  plugins: [react(), githubPagesFallback()],
})
