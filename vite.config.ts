import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild }) => {
  const isProduction = mode === 'production'
  const isSSR = process.env.SSR || isSsrBuild

  return {
    plugins: isSSR ? [] : [react()],
    build: {
      minify: isProduction,
      ssr: isSSR,
      rollupOptions: {
        input: isSSR
          ? '/src/server/entry-server.tsx'
          : '/src/client/entry-client.tsx',
        output: {
          format: isSSR ? 'esm' : 'es'
        }
      }
    },
    ssr: {
      noExternal: ['react-dom', 'react', '@vitejs/plugin-react-swc']
    }
  }
})
