import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <section id='footer' className='bg-slate-500 py-12'>
            <div className="mx-auto container">
                <div className='flex'>
                    <div className='w-1/2'>
                        <Link to='/' className='flex items-center cursor-pointer'>
                            <img
                                className="w-16"
                                src={logo}
                                alt="Your Company"
                            />
                            <h2 className='text-3xl font-bold ml-3 text-white'>Easy Bazaar</h2>
                        </Link>
                    </div>
                    <div className="w-1/2">
                        <div className='text-white'>
                            <h4>CATEGORIES</h4>
                            <ul className='p-0'>
                                <li className='list-unstyled my-2'>
                                    <Link className='text-white'>Fashion</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link className='text-white'>Sport</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link className='text-white'>Electronics</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link className='text-white'>Fragrance</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link className='text-white'>Furniture</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link className='text-white'>Makeup</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link className='text-white'>Beauty Accessories</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className='text-white'>
                            <h4>CUSTOMER SERVICE</h4>
                            <ul className='p-0'>
                                <li className='list-unstyled my-2'>
                                    <Link to='/' className='text-white'>Help Center</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link to='about' className='text-white'>How to Buy</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link to='events' className='text-white'>Returns & Refunds</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link to='blog' className='text-white'>Contact Us</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link to='contact' className='text-white'>Terms & Conditions</Link>
                                </li>
                                <li className='list-unstyled my-2'>
                                    <Link to='contact' className='text-white'>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div>
                            <h4>Payment Methods</h4>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                        <div className='text-white text-sm-center text-lg-start '>
                            <h4>Follow Us</h4>
                            <FontAwesomeIcon className='border border-1 p-2 rounded-circle' style={{ width: '20px', height: '20px' }} icon={faFacebook} />
                            <FontAwesomeIcon className='border border-1 p-2 rounded-circle ms-3' style={{ width: '20px', height: '20px' }} icon={faTwitter} />
                            <FontAwesomeIcon className='border border-1 p-2 rounded-circle ms-3' style={{ width: '20px', height: '20px' }} icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;