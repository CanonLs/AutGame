import { render } from '../src/entry/server'
import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
    const template = fs.readFileSync(
        path.resolve(process.cwd(), 'dist/client/index.html'),
        'utf-8'
    )

    const { html } = await render()

    const renderedHtml = template.replace('<!--ssr-outlet-->', html)

    res.setHeader('Content-Type', 'text/html')
    res.end(renderedHtml)
}