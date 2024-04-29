import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import FlashSales from "../pages/Home/FlashSales/FlashSales";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: < Home ></Home >,
                loader: () => fetch('https://easybazzar-server.vercel.app/products')
            },
            {
                path: '/flashsales',
                element: <FlashSales></FlashSales>,
                loader: () => fetch('https://easybazzar-server.vercel.app/flashsales')
            }
        ]
    }
]);

export default router;