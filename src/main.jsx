import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./Currency_Converter/App.jsx"
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
