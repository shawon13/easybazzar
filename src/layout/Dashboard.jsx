import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBook, FaList, FaShirt } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import { AiFillDashboard } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <>
      <div className="drawer block lg:hidden bg-slate-200">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar mx-auto">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <Link to="/" className="flex items-center cursor-pointer">
                <img className="w-16" src={logo} alt="easy bazaar" />
                <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-bold ml-3 text-black">
                  Easy Bazaar
                </h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div className="flex items-center justify-between">
              <li>
                <Link to="/" className="flex items-center cursor-pointer">
                  <img className="w-14 xl:w-16" src={logo} alt="easy bazaar" />
                  <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-bold ml-3 text-black">
                    Easy Bazaar
                  </h2>
                </Link>
              </li>
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <li className="list-none py-2 text-base">
              <NavLink
                className="flex items-center capitalize font-cinzel font-medium"
                to="/dashboard/adminhome"
              >
                <AiFillDashboard className="mr-2 text-2xl" />
                dashboard
              </NavLink>
            </li>
            <li className="list-none py-2 text-base">
              <NavLink
                className="flex items-center uppercase font-cinzel font-medium"
                to="/dashboard/additems"
              >
                <FaShirt className="mr-2 text-2xl" />
                add items
              </NavLink>
            </li>
            <li className="list-none py-2 text-base">
              <NavLink
                className="flex items-center uppercase font-cinzel font-medium"
                to="/dashboard/manageitems"
              >
                <FaList className="mr-2 text-2xl" />
                manage items
              </NavLink>
            </li>
            <li className="list-none py-2 text-base">
              <NavLink
                className="flex items-center uppercase font-cinzel font-medium"
                to="/dashboard/managebookings"
              >
                <FaBook className="mr-2 text-2xl" />
                manage bookings
              </NavLink>
            </li>
            <li className="list-none py-2 text-base">
              <NavLink
                className="flex items-center uppercase font-cinzel font-medium"
                to="/dashboard/allusers"
              >
                <HiUserGroup className="mr-2 text-2xl" />
                all users
              </NavLink>
            </li>
            <hr className="text-gray-400 my-2" />
            <li className="list-none py-2 text-base">
              <NavLink
                className="flex items-center uppercase font-cinzel font-medium"
                to="/"
              >
                <IoMdHome className="mr-2 text-2xl" />
                home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full" style={{ backgroundColor: "#F9F9F9" }}>
        <div className="min-h-screen bg-slate-200 w-1/5 py-8 pl-5 pr-2.5 hidden lg:block">
          <Link to="/" className="flex items-center cursor-pointer">
            <img className="w-14 xl:w-16" src={logo} alt="Your Company" />
            <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-bold ml-3 text-black">
              Easy Bazaar
            </h2>
          </Link>
          <div className="mt-4">
            {isAdmin ? (
              <ul>
                <li className="list-none py-3 text-base">
                  <NavLink
                    className="flex items-center capitalize font-cinzel font-medium"
                    to="/dashboard/adminhome"
                  >
                    <AiFillDashboard className="mr-2 text-2xl" />
                    dashboard
                  </NavLink>
                </li>
                <li className="list-none py-3 text-base">
                  <NavLink
                    className="flex items-center uppercase font-cinzel font-medium"
                    to="/dashboard/additems"
                  >
                    <FaShirt className="mr-2 text-2xl" />
                    add items
                  </NavLink>
                </li>
                <li className="list-none py-3 text-base">
                  <NavLink
                    className="flex items-center uppercase font-cinzel font-medium"
                    to="/dashboard/manageitems"
                  >
                    <FaList className="mr-2 text-2xl" />
                    manage items
                  </NavLink>
                </li>
                <li className="list-none py-3 text-base">
                  <NavLink
                    className="flex items-center uppercase font-cinzel font-medium"
                    to="/dashboard/managebookings"
                  >
                    <FaBook className="mr-2 text-2xl" />
                    manage bookings
                  </NavLink>
                </li>
                <li className="list-none py-3 text-base">
                  <NavLink
                    className="flex items-center uppercase font-cinzel font-medium"
                    to="/dashboard/allusers"
                  >
                    <HiUserGroup className="mr-2 text-2xl" />
                    all users
                  </NavLink>
                </li>
                <hr className="text-gray-400 my-2" />
                <li className="list-none py-3 text-base">
                  <NavLink
                    className="flex items-center uppercase font-cinzel font-medium"
                    to="/"
                  >
                    <IoMdHome className="mr-2 text-2xl" />
                    home
                  </NavLink>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-full lg:w-4/5">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
