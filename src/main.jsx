import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routers.jsx'
import BuynowContext from './context/BuynowContext.jsx';
import AddToCartContext from './context/AddToCartContext.jsx';
import QuantityContext from './context/QuantityContext.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuynowContext>
      <AddToCartContext>
        <QuantityContext>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </QuantityContext>
      </AddToCartContext>
    </BuynowContext>
  </React.StrictMode>,
)
