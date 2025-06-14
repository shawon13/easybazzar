import React from 'react'
import ReactDOM from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routers.jsx'
import AuthProvider from './Provider/AuthProvider.jsx';
import BuynowContext from './context/BuynowContext/BuynowContext.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CartCountContext from './context/CartCountContext/CartCountContext.jsx';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartCountContext>
        <BuynowContext>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </BuynowContext>
      </CartCountContext>
    </QueryClientProvider>
  </React.StrictMode>,
)
