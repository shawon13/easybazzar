import React from 'react'
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {

    return (
        <header className='bg-slate-100 py-3.5 shadow-md w-full'>
            <div className="container mx-auto px-4 ">
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
                            <input className=' p-3 rounded-lg outline-none' placeholder='Search in Easy Bazaar' type="text" name="" id="" style={{ width: '670px' }} />
                            <MagnifyingGlassIcon className='w-7 absolute right-4 cursor-pointer' />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center justify-end'>
                            <Link to='/login' className='transition-all px-6 py-2 hover:px-6 hover:py-2 rounded-md text-black outline outline-2 outline-black-500 hover:outline hover:outline-2 hover:outline-black-500 hover:bg-black hover:text-white'>Login</Link>
                            <Link to='/signup' className=' ml-6 px-6 py-2 hover:px-6 hover:py-2 rounded-md text-black outline outline-2 outline-black-500 transition hover:outline hover:outline-2 hover:outline-black-500 hover:bg-black hover:text-white'>Sign Up</Link>
                            <span className='ml-6 relative'>
                                <ShoppingCartIcon className='w-10 cursor-pointer' />
                                <p className=' w-6 h-6 rounded-full bg-black text-white text-center absolute bottom-5 left-6'>
                                    <span>0</span>
                                </p>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;