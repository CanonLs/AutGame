import { render } from '../src/server/entry-server'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import fs from 'fs'
import path from 'path'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const url = req.url || '/'
        const template = fs.readFileSync(
            path.resolve(process.cwd(), 'dist/client/index.html'),
            'utf-8'
        )
        const { html } = render(url)
        const finalHtml = template.replace('<!--app-html-->', html)

        res.setHeader('Content-Type', 'text/html')
        res.status(200).send(finalHtml)
    } catch (e) {
        console.error(e)
        res.status(500).send('Internal Server Error')
    }
}