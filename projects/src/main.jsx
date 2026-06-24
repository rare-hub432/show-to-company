import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import React from 'react'
// import ReactDOM from 'react-dom/client'
import "./bootstrap-4.6.2-dist/css/bootstrap.min.css"
import {BrowserRouter} from 'react-router-dom'


import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <StrictMode>
          <App />
      </StrictMode>
    </BrowserRouter>
)
