import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@/assets/scss/reset.scss'
import '@/assets/scss/common.scss'
import '@/assets/scss/font/font.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
