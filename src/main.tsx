import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Home from './routes/Inicio.tsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/',
    element: <Home />,
  },
  
  {
    path: '/SobreNosotros',
    element: <Home />,
  },

  {
    path: '/Servicios',
    element: <Home />,
  },

  {
    path: '/Proyectos',
    element: <Home />,
  },

  {
    path: '/Contacto',
    element: <Home />,
  },

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)