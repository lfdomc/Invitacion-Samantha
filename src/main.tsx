import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import Background from './components/Background/Background.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Background/>
  </StrictMode>,
)
