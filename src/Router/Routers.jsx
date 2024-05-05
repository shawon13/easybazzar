import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import FlashSales from "../pages/Home/FlashSales/FlashSales";
import SingleProduct from "../pages/Home/Products/SingleProduct/SingleProduct";

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
                path: '/product/:id',
                element: <SingleProduct></SingleProduct>,
                loader: ({ params }) => fetch(`https://easybazzar-server.vercel.app/product/${params.id}`)
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