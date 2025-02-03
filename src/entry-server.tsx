import React, { StrictMode } from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'

export function render(_url: string) {
  const html = ReactDOMServer.renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  return { html }
}
