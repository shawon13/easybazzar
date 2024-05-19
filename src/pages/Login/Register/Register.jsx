import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';


const Register = () => {

    return (
        <section className='py-10'>
            <div className='container mx-auto w-1/2 px-4'>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-xl font-normal capitalize'>Create your Easy Bazaar Account</h2>
                    <span className='text-sm text-gray-500'>Already member?<Link to="/login" className='mx-1'>Login</Link>here</span>
                </div>
                <div className='bg-white flex p-6 pb-12 rounded-md shadow-sm'>
                    <div className='w-4/5 mx-auto'>
                        <form action="">
                            <div className='mb-5'>
                                <label className='block'>Name</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type="text" name="" id="" placeholder='Please enter your name' required />
                            </div>
                            <div className='mb-5'>
                                <label className='block'>Photo Url</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type="url" name="" id="" placeholder='Please enter your photo url' required />
                            </div>
                            <div className='mb-5'>
                                <label className='block'>Email</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type="email" name="" id="" placeholder='Please enter your email' required />
                            </div>
                            <div className='mb-5'>
                                <label className='block'>Password</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type="password" name="" id="" placeholder='Please enter your password' required />
                            </div>
                            <div className='mb-5'>
                                <label className='block'>Confirm Password</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type="password" name="" id="" placeholder='Please enter your confirm password' required />
                            </div>
                            <button className='text-white bg-black uppercase font-normal w-full py-3' type="submit">sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Register;