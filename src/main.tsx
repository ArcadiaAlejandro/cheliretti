import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './routes/Inicio.tsx';
import Nosotros from './routes/nosotros.tsx'
import Contacto from './routes/contacto.tsx'
import Servicios from './routes/servicios.tsx'
import Proyectos from './routes/proyectos.tsx'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/SobreNosotros',
    element: <Nosotros />,
  },
  
  {
    path: '/Servicios',
    element: <Servicios />,
  },

  {
    path: '/Proyectos',
    element: <Proyectos />,
  },

  {
    path: '/Contacto',
    element: <Contacto />,
  },

  {
    path: '/',
    element: <Home />,
  },

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)