import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { UserConfig } from 'vite'

export default defineConfig({
  plugins: [react()] as UserConfig['plugins'],
  build: {
    ssr: true,
    rollupOptions: {
      input: {
        app: './index.html',
        server: './src/entry/server.tsx'
      }
    }
  }
})
