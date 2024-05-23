import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa6';
import { PiEyeClosedThin } from 'react-icons/pi';

const Login = () => {
    let [type, setType] = useState('password')
    const handleType = () => {
        if (type == 'password') {
            setType('text')
        }
        else {
            setType('password')
        }
    }
    return (
        <section className='py-10'>
            <div className='container mx-auto w-3/5 px-4'>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-xl font-normal'>Welcome to Easy Bazaar! Please Login</h2>
                    <span className='text-sm text-gray-500'>New member?<Link to="/register" className='mx-1'>Register</Link>here</span>
                </div>
                <div className='bg-white flex pt-6 pb-12 pl-6 pr-6 rounded-md'>
                    <div className='w-3/5 mr-5'>
                        <form action="">
                            <div className='mb-5'>
                                <label className='block'>Email*</label>
                                <input className='border w-full py-2.5 px-2.5' type="email" name="" id="" placeholder='Please enter your email' />
                            </div>
                            <div className='relative'>
                                <label className='block'>Password*</label>
                                <input className='border w-full py-2.5 px-2.5' type="password" name="" id="" placeholder='Please enter your password' />
                                {
                                    type == 'text' ? <FaRegEye onClick={handleType} className='absolute text-2xl top-9 right-3 cursor-pointer' /> : <PiEyeClosedThin onClick={handleType} className='absolute text-3xl top-8 right-3 cursor-pointer' />
                                }
                            </div>
                            <div className='text-end mt-3'>
                                <span className='text-xs font-normal cursor-pointer text-sky-900'>Reset Your Password</span>
                            </div>
                        </form>
                    </div>
                    <div className='w-2/5'>
                        <div className='mt-1.5'>
                            <button className='text-white bg-orange uppercase font-normal w-full py-3' type="submit">Login</button>
                        </div>
                        <div className='position-relative mt-3 mb-4'>
                            <p className='mx-auto text-center mb-0 fw-medium fs-6' style={{ width: '10%', border: '2px solid #f9f9f9' }}>OR</p>
                            <p className='or-hr mb-0'></p>
                            <p className='or-hr-two mb-0'></p>
                        </div>
                        <div>
                            <span style={{ backgroundColor: '#3b5998' }} className='rounded text-white capitalize font-normal w-full py-3 flex items-center justify-center mb-3 cursor-pointer'>
                                <FaFacebookF className='text-xl mr-3' />
                                <h4>Facebook</h4>
                            </span>
                            <span style={{ backgroundColor: '#d34836' }} className='rounded text-white bg-orange capitalize font-normal w-full py-3 flex items-center justify-center cursor-pointer'>
                                <FaGooglePlusG className='text-2xl mr-3' />
                                <h4>Google</h4>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;