import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    ssr: true, // 强制启用SSR模式
    ssrManifest: true, // 生成SSR清单文件
    outDir: 'dist', // 明确指定输出目录
    rollupOptions: {
      input: {
        server: './src/entry-server.tsx', // SSR入口
        client: './src/entry-client.tsx' // 客户端入口
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
})