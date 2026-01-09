import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import FlashSales from "../pages/Home/FlashSales/FlashSales";
import SingleProduct from "../pages/Home/Products/SingleProduct/SingleProduct";
import Buynow from "../pages/Buynow/Buynow";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import SearchProduct from "../pages/SearchProduct/SearchProduct";
import SubCategoryPage from "../pages/SubCategoryPage/SubCategoryPage";
import ChildCategoryPage from "../pages/ChildCategoryPage/ChildCategoryPage";
import Cart from "../pages/Cart/Cart";
import PrivetRoute from "./PrivetRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BrandsDetails from "../pages/Home/Brands/BrandsDetails/BrandsDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import Dashboard from "../layout/Dashboard";
import AdminHome from "../pages/AdminDashboard/AdminHome/AdminHome";
import AllUsers from "../pages/AdminDashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/AdminDashboard/AddItems/AddItems";
import UpdateItems from "../pages/AdminDashboard/UpdateItems/UpdateItems";
import ManageItems from "../pages/AdminDashboard/ManageItems/ManageItems";
import ResponsiveCategory from "../pages/Home/Categories/ResponsiveCategories/ResponsiveCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/product/:name",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.name}`),
      },
      {
        path: "/buynow",
        element: <Buynow></Buynow>,
      },
      {
        path: "/flashsales",
        element: <FlashSales></FlashSales>,
      },
      {
        path: "/categories/:category_id",
        element: <SubCategoryPage></SubCategoryPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.category_id}`),
      },
      {
        path: "/categories/childcategory/:product_id",
        element: <ChildCategoryPage></ChildCategoryPage>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/categories/childcategory/${params.product_id}`
          ),
      },
      {
        path: "/category/:id",
        element: <ResponsiveCategory></ResponsiveCategory>,
      },
      {
        path: "/brandsProducts/:brands_id",
        element: <BrandsDetails></BrandsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brandsProducts/${params.brands_id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/search",
        element: <SearchProduct></SearchProduct>,
      },
      {
        path: "/cart",
        element: (
          <PrivetRoute>
            <Cart></Cart>
          </PrivetRoute>
        ),
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard></Dashboard>
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard/adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/additems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageitems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateitems/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);

export default router;
