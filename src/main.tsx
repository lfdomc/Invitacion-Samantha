import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import { Header } from './components/Header/Header.tsx'
import Background from './components/Background/Background.tsx'
import Bloque1 from './components/Bloque1/Bloque1.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Background/>
    <Bloque1/>
  </StrictMode>,
)
