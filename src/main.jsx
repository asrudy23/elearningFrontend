import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Nécessaire pour useRoutes() */}
      <App />
    </BrowserRouter>
    {/* Si vous utilisez React Router, assurez-vous que le composant App est enveloppé dans BrowserRouter */}
  </React.StrictMode>,
)