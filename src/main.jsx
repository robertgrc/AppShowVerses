import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppShowVerses } from './AppShowVerses.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppShowVerses />
  </StrictMode>,
)
