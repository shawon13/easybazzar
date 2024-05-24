import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { RiEyeCloseLine } from 'react-icons/ri';
import { FaRegEye } from 'react-icons/fa6';
import { PiEyeClosedThin } from 'react-icons/pi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { signup, updateUser, emailVerification } = useContext(AuthContext);
    let [type, setType] = useState('password')
    const handleType = () => {
        if (type == 'password') {
            setType('text')
        }
        else {
            setType('password')
        }
    }
    const handleSignUP = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm)
        if (password !== confirm) {
            toast("password doesnot match!");
            return;

        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
            toast('Please add one uppercase letter');
            return;
        }
        else if (!/(?=.*?[0-9])/.test(password)) {
            toast('Please add one digit');
            return;
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            toast('Please add one special character');
            return;
        }
        else if (!/.{6,}/.test(password)) {
            toast('Password must be 6 character long');
            return;
        }
        signup(email, password)
            .then(result => {
                const regUser = result.user
                console.log(regUser)
                toast('Successfully Registered');
                form.reset();
                updateUser(regUser, name, photoUrl)
                emailVerification(regUser)
                    .then(() => {
                        toast('Please Check Your Email,Email verification sent!');
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <section className='py-10'>
            <div className='container mx-auto w-1/2 px-4'>
                <div className='flex justify-between items-center mb-5'>
                    <h2 className='text-xl font-normal capitalize'>Create your Easy Bazaar Account</h2>
                    <span className='text-sm text-gray-500'>Already member?<Link to="/login" className='mx-1'>Login</Link>here</span>
                </div>
                <div className='bg-white flex p-6 pb-12 rounded-md shadow-sm'>
                    <div className='w-4/5 mx-auto'>
                        <ToastContainer />
                        <form onSubmit={handleSignUP} action="">
                            <div className='mb-4'>
                                <label className='block mb-1'>Name</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type="text" name="name" id="" placeholder='Please enter your name' required />
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-1'>Photo Url</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type="url" name="photourl" id="" placeholder='Please enter your photo url' />
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-1'>Email</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type="email" name="email" id="" placeholder='Please enter your email' required />
                            </div>
                            <div className='mb-4'>
                                <label className='block mb-1'>Password</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type="password" name="password" id="" placeholder='Please enter your password' required />
                            </div>
                            <div className='mb-4 relative'>
                                <label className='block mb-1'>Confirm Password</label>
                                <input className='border w-full py-2.5 px-2.5 outline-0' type={type} name="confirm" id="" placeholder='Please enter your confirm password' required />
                                {
                                    type == 'text' ? <FaRegEye onClick={handleType} className='absolute text-2xl top-9 right-3 cursor-pointer' /> : <PiEyeClosedThin onClick={handleType} className='absolute text-3xl top-8 right-3 cursor-pointer' />
                                }
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