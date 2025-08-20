
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx'; // Importez votre page
import './index.css';

// Définissez vos routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Le layout principal (notre App.jsx)
    children: [
      {
        path: "/",
        element: <HomePage />, // La page à afficher dans le <Outlet />
      },
      // ... vous pouvez ajouter d'autres pages ici
      // { path: "/contact", element: <ContactPage /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);