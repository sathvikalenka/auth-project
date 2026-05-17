import { StrictMode } from 'react'
import { UserProvider } from "./UserContext";
import { createRoot } from 'react-dom/client'
import './index.css'
import Sathvi from './Sathvi.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>   <Sathvi /></UserProvider>
 
  </StrictMode>,
)
