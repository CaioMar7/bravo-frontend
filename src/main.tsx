import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthProvider/index.tsx'
import './index.css'
import { Routes } from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </StrictMode>,
)
