import React, { useContext } from 'react'
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { AddToCart } from '../../context/AddToCartContext';
const Header = () => {
    const { cart } = useContext(AddToCart)



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
                            <input className='p-3 rounded-lg outline-none' placeholder='Search in Easy Bazaar' type="text" name="" style={{ width: '670px' }} />
                            <MagnifyingGlassIcon className='w-7 absolute right-4 cursor-pointer' />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex items-center justify-end'>
                            <Link to='/login' className='px-6 py-2 rounded-md text-white bg-black'>Login</Link>
                            <Link to='/register' className=' ml-6 px-6 py-2 rounded-md text-white bg-black'>Sign Up</Link>
                            <span className='ml-6 relative'>
                                <Link to='/cart' className='text-black'><ShoppingCartIcon className='w-10 cursor-pointer' /></Link>
                                <p className=' w-6 h-6 rounded-full bg-black text-white text-center absolute bottom-6 left-7'>
                                    <span className=''>{cart.length}</span>
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