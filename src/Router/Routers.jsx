import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import FlashSales from "../pages/Home/FlashSales/FlashSales";
import SingleProduct from "../pages/Home/Products/SingleProduct/SingleProduct";
import Buynow from "../pages/Buynow/Buynow";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import SingleFlashsaleProduct from "../pages/Home/FlashSales/SingleFlashsaleProduct/SingleFlashsaleProduct";
import SearchProduct from "../pages/SearchProduct/SearchProduct";
import SubCategoryPage from "../pages/SubCategoryPage/SubCategoryPage";
import ChildCategoryPage from "../pages/ChildCategoryPage/ChildCategoryPage";
import Cart from "../pages/Cart/Cart";

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
            },
            {
                path: 'flashsales/flashsale/:id',
                element: <SingleFlashsaleProduct></SingleFlashsaleProduct>,
                loader: ({ params }) => fetch(`https://easybazzar-server.vercel.app/flashsales/flashsale/${params.id}`)
            },
            {
                path: '/flashsale/:id',
                element: <SingleFlashsaleProduct></SingleFlashsaleProduct>,
                loader: ({ params }) => fetch(`https://easybazzar-server.vercel.app/flashsale/${params.id}`)
            },
            {
                path: '/categories/:id',
                element: <SubCategoryPage></SubCategoryPage>,
                loader: ({ params }) => fetch(`https://easybazzar-server.vercel.app/categories/${params.id}`)
            },
            {
                path: '/categories/childcategory/:id',
                element: <ChildCategoryPage></ChildCategoryPage>,
                loader: ({ params }) => fetch(`https://easybazzar-server.vercel.app/categories/childcategory/${params.id}`)
            },
            {
                path: '/buynow',
                element: <Buynow></Buynow>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/searcheproduct',
                element: <SearchProduct></SearchProduct>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            }
        ]
    }
]);

export default router;