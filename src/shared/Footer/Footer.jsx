import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import Payments from './Payments/Payments';
import FooterCategory from './FooterCategory/FooterCategory';
import FooterServices from './FooterServices/FooterServices';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    const payments = [
        {
            id: 1,
            "img": "https://i.ibb.co/sKSV6ZM/cashondelivery.jpg"
        },
        {
            id: 2,
            "img": "https://i.ibb.co/QPs0tFz/bKash.jpg"
        },
        {
            id: 3,
            "img": "https://i.ibb.co/Hq96NyY/dutch-bangla.png"
        },
        {
            id: 4,
            "img": "https://i.ibb.co/rs5Yvks/MC.jpg"
        },
        {
            id: 5,
            "img": "https://i.ibb.co/W6KWVBj/nagad.png"
        },
        {
            id: 6,
            "img": "https://i.ibb.co/sP4g12Y/visa.jpg"
        },
        {
            id: 7,
            "img": "https://i.ibb.co/qYGJN7V/rocket.jpg"
        }
    ]
    const categories = [
        {
            id: 1,
            "name": "Women's & Girls'Fashion",
            "path": "/Women's_Girls'Fashion"
        },
        {
            id: 2,
            "name": "Health & Beauty",
            "path": "/Health_Beauty"
        },
        {
            id: 3,
            "name": "men's & boy'fashion",
            "path": "/men's_boy'fashion"
        },
        {
            id: 4,
            "name": "mother & baby",
            "path": "/mother_baby"
        },
        {
            id: 5,
            "name": "electronic accessories",
            "path": "/electronic_accessories"
        },
        {
            id: 6,
            "name": "sports & outdoors",
            "path": "/sports_outdoors"
        },
        {
            id: 7,
            "name": "automotive & motorbike",
            "path": "/automotive_motorbike"
        }
    ]
    const services = [
        {
            id: 1,
            "name": "Help Center",
            "path": "/help-center"
        },
        {
            id: 2,
            "name": "How to Buy",
            "path": "/how-to-buy"
        },
        {
            id: 3,
            "name": "Returns & Refunds",
            "path": "/returns-refunds"
        },
        {
            id: 4,
            "name": "Contact Us",
            "path": "/contact-us"
        },
        {
            id: 5,
            "name": "Terms & Conditions",
            "path": "/terms-conditions"
        },
        {
            id: 6,
            "name": "Privacy Policy",
            "path": "/privacy-policy"
        }
    ]
    return (
        <section id='footer' className='bg-slate-500 py-12'>
            <div className="mx-auto container">
                <div className='flex'>
                    <div className='w-11/12'>
                        <Link to='/' className='flex items-center cursor-pointer'>
                            <img
                                className="w-16"
                                src={logo}
                                alt="Your Company"
                            />
                            <h2 className='text-3xl font-bold ml-3 text-white'>Easy Bazaar</h2>
                        </Link>
                        <p className='text-white px-4 mt-6'>Discover the ease and convenience of shopping with Easy Bazaar. Whether you are a seasoned online shopper or new to the world of e-commerce, we invite you to experience the difference for yourself. Welcome to Easy Bazaar, where shopping is always a breeze!</p>
                    </div>
                    <div className="w-1/2">
                        <div className='text-white'>
                            <h4 className='text-xl font-medium capitalize'>categories</h4>
                            <ul className='p-0'>
                                {
                                    categories.map(category => <FooterCategory key={category.id} category={category}></FooterCategory>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className='text-white'>
                            <h4 className='text-xl font-medium capitalize'>customer service</h4>
                            <ul className='p-0'>
                                {
                                    services.map(service => <FooterServices key={service.id} service={service}></FooterServices>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className='text-white'>
                            <h4 className='text-xl font-medium mb-4'>Payment Methods</h4>
                            <div className='grid grid-cols-4 gap-4'>
                                {
                                    payments.map(methods => <Payments key={methods.id} methods={methods}></Payments>)
                                }
                            </div>
                        </div>
                        <div className='text-white text-sm-center text-lg-start mt-5'>
                            <h4 className='text-xl font-medium mb-3'>Follow Us</h4>
                            <FontAwesomeIcon className='border border-1 p-2 rounded-full' style={{ width: '20px', height: '20px' }} icon={faFacebook} />
                            <FontAwesomeIcon className='border border-1 p-2 rounded-full ms-3' style={{ width: '20px', height: '20px' }} icon={faGlobe} />
                            <FontAwesomeIcon className='border border-1 p-2 rounded-full ms-3' style={{ width: '20px', height: '20px' }} icon={faYoutube} />
                            <FontAwesomeIcon className='border border-1 p-2 rounded-full ms-3' style={{ width: '20px', height: '20px' }} icon={faTwitter} />
                            <FontAwesomeIcon className='border border-1 p-2 rounded-full ms-3' style={{ width: '20px', height: '20px' }} icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;