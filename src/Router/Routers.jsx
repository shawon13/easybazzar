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
import SingleBrand from "../pages/Home/Brands/SingleBrand/SingleBrand";
import CheckOut from "../pages/CheckOut/CheckOut";
import BrandBuynow from "../pages/BrandBuynow/BrandBuynow";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: < Home ></Home >,
            },
            {
                path: '/product/:name',
                element: <SingleProduct />,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.name}`)
            },
            {
                path: '/buynow',
                element: <Buynow></Buynow>,
            },
            {
                path: '/flashsales',
                element: <FlashSales></FlashSales>
            },
            {
                path: '/flashsale/:name',
                element: <SingleFlashsaleProduct></SingleFlashsaleProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/flashsale/${params.name}`)
            },
            {
                path: '/categories/:category_id',
                element: <SubCategoryPage></SubCategoryPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.category_id}`)
            },
            {
                path: '/categories/childcategory/:product_id',
                element: <ChildCategoryPage></ChildCategoryPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/childcategory/${params.product_id}`)
            },
            {
                path: '/brandsproducts/:category_id',
                element: <BrandsDetails></BrandsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/brandsproducts/${params.category_id}`)
            },
            {
                path: '/brand/:name',
                element: <SingleBrand></SingleBrand>,
                loader: ({ params }) => fetch(`https://easybazzar-server.vercel.app/brand/${params.name}`)
            },
            {
                path: '/brand/buynow/:name',
                element: <PrivetRoute><BrandBuynow></BrandBuynow></PrivetRoute>,
                loader: ({ params }) => fetch(`https://easybazzar-server.vercel.app/brand/buynow/${params.name}`)
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
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            }
        ]
    }
]);

export default router;