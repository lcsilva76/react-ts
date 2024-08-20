import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Global from './global-styled.ts'

//import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Global/>
  </StrictMode>,
)
