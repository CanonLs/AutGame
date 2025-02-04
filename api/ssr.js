// api/ssr.js
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const { render } = require('../dist/server.js')
const manifest = require('../dist/ssr-manifest.json') // 加载SSR清单

export default async (req, res) => {
  const { html } = render()
  
  // 动态插入资源路径
  const clientScript = manifest['client.js']
  const cssLink = manifest['index.css']

  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/${cssLink}">
      </head>
      <body>
        <div id="root">${html}</div>
        <script type="module" src="/${clientScript}"></script>
      </body>
    </html>
  `)
}
