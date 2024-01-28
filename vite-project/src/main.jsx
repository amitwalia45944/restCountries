import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeChanger } from './Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeChanger>   
    <App />
    </ThemeChanger>
    
  </React.StrictMode>,
)
