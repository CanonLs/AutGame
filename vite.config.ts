import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vercel from 'vite-plugin-vercel'

export default defineConfig({
  plugins: [
    react(),
    vercel({
      // 开启 SSR
      ssr: true,
      // 指定 SSR 入口文件
      serverEntry: 'src/entry-server.tsx'
    })
  ]
})
