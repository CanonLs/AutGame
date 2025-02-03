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
  ],
  build: {
    // 必须启用 SSR 构建
    ssr: true,
    rollupOptions: {
      input: {
        // 客户端入口
        client: 'src/entry-client.tsx',
        // 服务端入口（与插件配置保持一致）
        server: 'src/entry-server.tsx'
      }
    }
  }
})
