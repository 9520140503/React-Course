import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./Context_api_Project/App.jsx"
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>
)
