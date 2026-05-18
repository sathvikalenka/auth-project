import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Laxmi from './Laxmi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Laxmi />
  </StrictMode>,
)
