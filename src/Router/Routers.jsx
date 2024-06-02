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
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BrandsDetails from "../pages/Home/Brands/BrandsDetails/BrandsDetails";
import SingleBrand from "../pages/SingleBrand/SingleBrand";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
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
                path: '/brandsproduct/:id',
                element: <BrandsDetails></BrandsDetails>,
                loader: ({ params }) => fetch(`https://easybazzar-server.vercel.app/brandsproduct/${params.id}`)
            },
            {
                path: '/brand/:id',
                element: <SingleBrand></SingleBrand>,
                loader: ({ params }) => fetch(`https://easybazzar-server.vercel.app/brand/${params.id}`)
            },
            {
                path: '/buynow',
                element: <PrivetRoute><Buynow></Buynow></PrivetRoute>
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
                element: <PrivetRoute><Cart></Cart></PrivetRoute>
            }
        ]
    }
]);

export default router;