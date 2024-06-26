import React, { useContext, useEffect, useRef, useState } from 'react'
import './Header.css'
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { AddToCart } from '../../context/AddToCartContext';
import { AuthContext } from '../../Provider/AuthProvider';
import { MdOutlineKeyboardArrowRight, MdOutlineStars } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { LiaBoxSolid } from "react-icons/lia";
import { FiHeart } from "react-icons/fi";
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { IoMdCloseCircleOutline, IoIosArrowDown } from "react-icons/io";


const Header = () => {
    const { cart } = useContext(AddToCart)
    const { user, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    const handleLogOut = () => {
        logOut();
        setOpen(false);
    };
    useEffect(() => {
        let handleOutSideClick = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleOutSideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutSideClick)
        }
    });
    return (
        <header className='bg-slate-100 py-3.5 shadow-md w-full'>
            <div className="container mx-auto px-4">
                <nav className="flex items-center">
                    <div className='w-1/2'>
                        <Link to='/' className='flex items-center cursor-pointer'>
                            <img
                                className="w-16"
                                src={logo}
                                alt="Your Company"
                            />
                            <h2 className='text-3xl font-bold ml-3 text-black'>Easy Bazaar</h2>
                        </Link>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center relative'>
                            <input className='p-3 rounded-lg outline-none' placeholder='Search in Easy Bazaar' type="text" name="" style={{ width: '670px' }} />
                            <MagnifyingGlassIcon className='w-7 absolute right-4 cursor-pointer' />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center justify-end relative' ref={menuRef}>
                            {
                                user ? <>
                                    <div onClick={() => setOpen(!open)} className='cursor-pointer ml-5 flex items-center'>
                                        <img src={user?.photoURL} className='w-12 h-12 rounded-full border' alt="" />
                                        <div className='mx-2'>
                                            <h4 className='text-sm'>Hello, {user.displayName.slice(0, 10)}...</h4>
                                            <span className='font-semibold text-base capitalize'>Orders & Account</span>
                                        </div>
                                        <IoIosArrowDown />
                                    </div>
                                    <span className='ml-6 relative'>
                                        <Link to='/cart' className='text-black'><ShoppingCartIcon className='w-10 cursor-pointer' /></Link>
                                        <p className=' w-5 h-5 rounded-full bg-black text-white absolute top-0 border-2 border-slate-100' style={{ top: '-3px', right: '-8px' }}>
                                            <span className='text-xs absolute top-0' style={{ left: '5px' }}>{cart.length}</span>
                                        </p>
                                    </span>
                                </> : <>
                                    <Link to='/login' className='px-6 py-2 rounded-md text-white bg-black'>Login</Link>
                                    <Link to='/register' className=' ml-6 px-6 py-2 rounded-md text-white bg-black'>Sign Up</Link>
                                    <span className='ml-6 relative'>
                                        <Link to='/cart' className='text-black'><ShoppingCartIcon className='w-10 cursor-pointer' /></Link>
                                        <p className=' w-5 h-5 rounded-full bg-black text-white absolute border-2 border-slate-100' style={{ top: '-3px', right: '-8px' }}>
                                            <span className='text-xs absolute top-0' style={{ left: '5px' }}>{cart.length}</span>
                                        </p>
                                    </span>
                                </>
                            }
                            {/* Dropdown menu Start*/}
                            <div className={`sub-menu-wrap z-10 absolute right-0 w-80 ${open ? 'active-menu' : 'inactive-menu'}`} style={{ top: '70px' }}>
                                <div className="sub-menu bg-black m-2.5 p-4 rounded shadow-md">
                                    <Link className='sub-menu-link mb-5 cursor-pointer flex items-center justify-between text-decoration-none m-2 ' style={{ color: '#525252' }}>
                                        <div className='flex items-center'>
                                            <BsEmojiSmile className='text-2xl text-white' />
                                            <p className='ml-3 capitalize font-light mb-0 text-sm transition-all text-white'>Manage my account</p>
                                        </div>
                                        <MdOutlineKeyboardArrowRight className='menu-arrow text-white' />
                                    </Link>
                                    <Link className='sub-menu-link mb-5 cursor-pointer flex items-center justify-between text-decoration-none m-2' style={{ color: '#525252' }}>
                                        <div className='flex items-center'>
                                            <LiaBoxSolid className='text-2xl text-white' />
                                            <p className='ml-3 capitalize font-light mb-0 text-sm transition-all text-white'>my orders</p>
                                        </div>
                                        <MdOutlineKeyboardArrowRight className='menu-arrow text-white' />
                                    </Link>
                                    <Link className='sub-menu-link mb-5 cursor-pointer flex items-center justify-between text-decoration-none m-2' style={{ color: '#525252' }}>
                                        <div className='flex items-center'>
                                            <FiHeart className='text-2xl text-white' />
                                            <p className='ml-3 capitalize font-light mb-0 text-sm transition-all text-white'>my wishlist</p>
                                        </div>
                                        <MdOutlineKeyboardArrowRight className='menu-arrow text-white' />
                                    </Link>
                                    <Link className='sub-menu-link mb-5 cursor-pointer flex items-center justify-between text-decoration-none m-2' style={{ color: '#525252' }}>
                                        <div className='flex items-center'>
                                            <MdOutlineStars className='text-2xl text-white' />
                                            <p className='ml-3 capitalize font-light mb-0 text-sm transition-all text-white'>my reviews</p>
                                        </div>
                                        <MdOutlineKeyboardArrowRight className='menu-arrow text-white' />
                                    </Link>
                                    <Link className='sub-menu-link mb-5 cursor-pointer flex items-center justify-between text-decoration-none m-2' style={{ color: '#525252' }}>
                                        <div className='flex items-center'>
                                            <IoMdCloseCircleOutline className='text-2xl text-white' />
                                            <p className='ml-3 capitalize font-light mb-0 text-sm transition-all text-white'>my Returns & Cancellations</p>
                                        </div>
                                        <MdOutlineKeyboardArrowRight className='menu-arrow text-white' />
                                    </Link>
                                    <span onClick={handleLogOut} className='sub-menu-link cursor-pointer justify-between flex items-center text-decoration-none m-2 fw-medium' style={{ color: '#525252' }}>
                                        <div className='flex items-center'>
                                            <HiOutlineArrowLeftStartOnRectangle className='text-2xl text-white' />
                                            <p className='ml-3 capitalize font-light mb-0 text-sm transition-all text-white'>Logout</p>
                                        </div>
                                        <MdOutlineKeyboardArrowRight className='menu-arrow text-white' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;