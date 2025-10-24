import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  RouterProvider } from 'react-router'
import AuthProvider from './contexts/AuthProvider.jsx'
import router from './Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   </HelmetProvider>
  </StrictMode>,
)
