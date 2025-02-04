import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-server.tsx',  // 指定SSR入口
    rollupOptions: {
      input: {
        server: 'src/entry-server.tsx', // SSR入口
        client: 'src/entry-client.tsx',         // 客户端入口
      },
      output: {
        dir: 'dist',
        format: 'esm'  // Vercel需要ES模块
      }
    }
  }
})