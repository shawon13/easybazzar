import { useContext, useEffect, useRef, useState } from "react";
import "./Header.css";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight, MdOutlineStars } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { LiaBoxSolid } from "react-icons/lia";
import { FiHeart } from "react-icons/fi";
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { IoMdCloseCircleOutline, IoIosArrowDown } from "react-icons/io";
import { CartCount } from "../../context/CartCountContext/CartCountContext";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const { cartCount } = useContext(CartCount);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchText)}`);
      setSearchText("");
    }
  };

  return (
    <header className="py-3.5 w-full bg-base-100 shadow-sm">
      <div className="sm:container sm:mx-auto sm:px-4">
        <div className="navbar">
          <div className="navbar-start sm:mr-0 mr-3">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              {/* mobile responsive */}
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-76 h-auto p-2 shadow"
              >
                <li>
                  {user ? (
                    <>
                      <a>
                        <h4 className="text-sm">
                          Hello, {user?.displayName?.slice(0, 10)}...
                        </h4>
                        <span className="text-sm capitalize">
                          Orders & Account
                        </span>
                      </a>
                      <ul className="p-2">
                        <li>
                          <Link
                            className="sub-menu-link cursor-pointer flex items-center justify-between text-decoration-none ml-0"
                            style={{ color: "#201d1dff" }}
                          >
                            <div className="flex items-center">
                              <BsEmojiSmile className="text-2xl text-black" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-black">
                                Manage my account
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-black" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="sub-menu-link cursor-pointer flex items-center justify-between text-decoration-none m-2 ml-0"
                            style={{ color: "#525252" }}
                          >
                            <div className="flex items-center">
                              <LiaBoxSolid className="text-2xl text-black" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-black">
                                my orders
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-black" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="sub-menu-link cursor-pointer flex items-center justify-between text-decoration-none m-2 ml-0"
                            style={{ color: "#525252" }}
                          >
                            <div className="flex items-center">
                              <FiHeart className="text-2xl text-black" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-black">
                                my wishlist
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-black" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="sub-menu-link cursor-pointer flex items-center justify-between text-decoration-none m-2 ml-0"
                            style={{ color: "#525252" }}
                          >
                            <div className="flex items-center">
                              <MdOutlineStars className="text-2xl text-black" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-black">
                                my reviews
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-black" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="sub-menu-link cursor-pointer flex items-center justify-between text-decoration-none m-2 ml-0"
                            style={{ color: "#525252" }}
                          >
                            <div className="flex items-center">
                              <IoMdCloseCircleOutline className="text-2xl text-black" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-black">
                                my Returns & Cancellations
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-black" />
                          </Link>
                        </li>
                        <li>
                          <span
                            onClick={handleLogOut}
                            className="sub-menu-link cursor-pointer justify-between flex items-center text-decoration-none m-2 ml-0 fw-medium"
                            style={{ color: "#525252" }}
                          >
                            <div className="flex items-center">
                              <HiOutlineArrowLeftStartOnRectangle className="text-2xl text-black" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-black">
                                Logout
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-black" />
                          </span>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <div className="flex w-full">
                        <Link
                          style={{ color: "#fff" }}
                          to="/login"
                          className="px-6 py-3 rounded-md bg-black text-center items-center w-1/2"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          style={{ color: "#fff" }}
                          className=" px-6 py-3 rounded-md bg-black text-center w-1/2"
                        >
                          Sign Up
                        </Link>
                      </div>
                    </>
                  )}
                </li>
                <li className="mobile-search-bar hidden">
                  <div className="flex items-center w-full relative hover:bg-transparent">
                    <input
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      className="search-bar  p-3 rounded-lg outline-none border w-full sm:w-2xs md:w-sm xl:w-xl mx-auto"
                      placeholder="Search in Easy Bazaar"
                      type="text"
                      name=""
                    />
                    <MagnifyingGlassIcon
                      onClick={handleSearch}
                      className="w-6 sm:w-7 absolute right-4 cursor-pointer"
                    />
                  </div>
                </li>
              </ul>
              {/* mobile responsive end */}
            </div>
            <Link to="/" className="flex items-center cursor-pointer">
              <img
                className="w-14 sm:w-14 md:w-16 logo"
                src={logo}
                alt="Your Company"
              />
              <h2 className="text-lg sm:text-lg md:text-xl lg:text-3xl font-bold ml-3 text-black logo-name">
                Easy Bazaar
              </h2>
            </Link>
          </div>
          <div className="navbar-center">
            <div className="flex items-center relative">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="search-bar p-3 rounded-lg outline-none border w-2xs sm:w-2xs md:w-sm xl:w-xl mx-auto"
                placeholder="Search in Easy Bazaar"
                type="text"
                name=""
              />
              <MagnifyingGlassIcon
                onClick={handleSearch}
                className="w-6 sm:w-7 absolute right-4 cursor-pointer"
              />
            </div>
          </div>
          <div className="navbar-end w-auto lg:w-1/2 ml-3 sm:ml-5">
            <div className="hidden lg:block">
              {user ? (
                <>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button">
                      <div className="cursor-pointer ml-5 flex items-center">
                        <div className="mx-2">
                          <h4 className="text-sm">
                            Hello, {user?.displayName?.slice(0, 10)}...
                          </h4>
                          <span className="font-semibold text-base capitalize">
                            Orders & Account
                          </span>
                        </div>
                        <IoIosArrowDown />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="sub-menu-wrap z-10 absolute -left-4   w-80 menu menu-sm dropdown-content"
                      style={{ top: "70px" }}
                    >
                      <div className="sub-menu bg-black m-2.5 p-4 rounded shadow-md">
                        <li>
                          <Link
                            className="sub-menu-link mb-5 cursor-pointer flex items-center justify-between text-decoration-none m-2 "
                            style={{ color: "#201d1dff" }}
                          >
                            <div className="flex items-center">
                              <BsEmojiSmile className="text-2xl text-white" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-white">
                                Manage my account
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-white" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="sub-menu-link mb-5 cursor-pointer flex items-center justify-between text-decoration-none m-2"
                            style={{ color: "#525252" }}
                          >
                            <div className="flex items-center">
                              <LiaBoxSolid className="text-2xl text-white" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-white">
                                my orders
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-white" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="sub-menu-link mb-5 cursor-pointer flex items-center justify-between text-decoration-none m-2"
                            style={{ color: "#525252" }}
                          >
                            <div className="flex items-center">
                              <FiHeart className="text-2xl text-white" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-white">
                                my wishlist
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-white" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="sub-menu-link mb-5 cursor-pointer flex items-center justify-between text-decoration-none m-2"
                            style={{ color: "#525252" }}
                          >
                            <div className="flex items-center">
                              <MdOutlineStars className="text-2xl text-white" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-white">
                                my reviews
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-white" />
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="sub-menu-link mb-5 cursor-pointer flex items-center justify-between text-decoration-none m-2"
                            style={{ color: "#525252" }}
                          >
                            <div className="flex items-center">
                              <IoMdCloseCircleOutline className="text-2xl text-white" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-white">
                                my Returns & Cancellations
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-white" />
                          </Link>
                        </li>
                        <li>
                          <span
                            onClick={handleLogOut}
                            className="sub-menu-link cursor-pointer justify-between flex items-center text-decoration-none m-2 fw-medium"
                            style={{ color: "#525252" }}
                          >
                            <div className="flex items-center">
                              <HiOutlineArrowLeftStartOnRectangle className="text-2xl text-white" />
                              <p className="ml-3 capitalize font-light mb-0 text-sm transition-all text-white">
                                Logout
                              </p>
                            </div>
                            <MdOutlineKeyboardArrowRight className="menu-arrow text-white" />
                          </span>
                        </li>
                      </div>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    style={{ color: "#fff" }}
                    to="/login"
                    className="px-6 py-3 rounded-md bg-black"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    style={{ color: "#fff" }}
                    className=" ml-5 px-6 py-3 rounded-md bg-black"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
            {/* {user && ( */}
            <span className="lg:ml-6 relative">
              <Link to="/cart" className="text-black">
                <ShoppingCartIcon className="w-10 cursor-pointer" />
              </Link>
              {user && cartCount > 0 && (
                <p
                  className="w-[22px] h-[22px] rounded-full bg-black text-white absolute border-2 border-slate-100 flex justify-center items-center"
                  style={{ top: "-5px", right: "-10px" }}
                >
                  <span style={{ fontSize: "11px" }} className="font-semibold">
                    {cartCount}
                  </span>
                </p>
              )}
            </span>
            {/* )} */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
