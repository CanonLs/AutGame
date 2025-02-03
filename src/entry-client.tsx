import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const container = document.getElementById('root')

if (container) {
    hydrateRoot(
        container,
        <StrictMode>
            <App />
        </StrictMode>
    )
}