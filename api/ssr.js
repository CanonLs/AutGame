import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { render } = require('../dist/server.js') // 导入编译后的SSR入口

export default async (req, res) => {
  const { html } = render()
  res
    .status(200)
    .setHeader('Content-Type', 'text/html')
    .send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with Vite</title>
          <link rel="stylesheet" href="/assets/index.css" /> <!-- 静态资源路径 -->
        </head>
        <body>
          <div id="root">${html}</div>
          <script type="module" src="/assets/main.js"></script>
        </body>
      </html>
    `)
}
