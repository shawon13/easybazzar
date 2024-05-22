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


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuynowContext>
      <AddToCartContext>
        <RouterProvider router={router} />
      </AddToCartContext>
    </BuynowContext>
  </React.StrictMode>,
)
