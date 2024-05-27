import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaGooglePlusG } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa6';
import { PiEyeClosedThin } from 'react-icons/pi';
import { AuthContext } from '../../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let [type, setType] = useState('password')
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathName || '/'
    const handleType = () => {
        if (type == 'password') {
            setType('text')
        }
        else {
            setType('password')
        }
    }
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const logUser = result.user;
                console.log(logUser)
                toast('Successfully login');
                form.reset()
                console.log(logUser)
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            })
        console.log(email, password)
    }
    return (
        <section className='py-10'>
            <div className='container mx-auto w-1/2 px-4'>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-xl font-normal'>Welcome to Easy Bazaar! Please Login</h2>
                    <span className='text-sm text-gray-500'>New member?<Link to="/register" className='mx-1'>Register</Link>here</span>
                </div>
                <div className='bg-white flex justify-center pt-6 pb-10 pl-6 pr-6 rounded-md shadow-sm'>
                    <div className='w-4/5 mr-5'>
                        <ToastContainer />
                        <form action="" onSubmit={handleLogin}>
                            <div className='mb-4'>
                                <label className='block mb-1'>Email*</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type="email" name="email" id="" placeholder='Please enter your email' />
                            </div>
                            <div className='relative'>
                                <label className='block mb-1'>Password*</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type={type} name="password" id="" placeholder='Please enter your password' />
                                {
                                    type == 'text' ? <FaRegEye onClick={handleType} className='absolute text-2xl top-10 right-3 cursor-pointer' /> : <PiEyeClosedThin onClick={handleType} className='absolute text-3xl top-9 right-3 cursor-pointer' />
                                }
                            </div>
                            <div className='text-end'>
                                <span className='text-xs font-normal cursor-pointer text-sky-900'>Reset Your Password</span>
                            </div>
                            <div className='mt-3.5'>
                                <button className='text-white bg-black uppercase font-normal w-full py-3' type="submit">Login</button>
                            </div>
                        </form>
                        <div className='position-relative mt-4'>
                            <p className='mx-auto text-center mb-0 fw-medium fs-6' style={{ width: '10%', border: '2px solid #f9f9f9' }}>OR</p>
                            <p className='or-hr mb-0'></p>
                            <p className='or-hr-two mb-0'></p>
                        </div>
                        <div className='flex justify-center items-center mt-6'>
                            <span style={{ backgroundColor: '#3b5998' }} className='rounded-full w-10 h-10 flex justify-center items-center mr-3 text-white cursor-pointer'>
                                <FaFacebookF className='text-xl' />
                            </span>
                            <span style={{ backgroundColor: '#d34836' }} className='rounded-full w-10 h-10 flex justify-center items-center mr-3 text-white cursor-pointer'>
                                <FaGooglePlusG className='text-2xl' />
                            </span>
                            <span className='rounded-full w-10 h-10 flex justify-center items-center bg-black text-white cursor-pointer'>
                                <FaGithub className='text-2xl' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;