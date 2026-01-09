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
    const socialIcons = [
  {
    icon: faFacebook,
  },
  {
    icon: faGlobe,
  },
  {
    icon: faYoutube,
  },
  {
    icon: faTwitter,
  },
  {
    icon: faInstagram,
  }
]
    return (
        <section id='footer' className='bg-slate-500 py-12'>
            <div className="mx-auto container px-4">
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <div className=''>
                        <Link to='/' className='flex items-center cursor-pointer'>
                            <img
                                className="w-14 md:w-16 footer-logo"
                                src={logo}
                                alt="Your Company"
                            />
                            <h2 className='text-xl sm:text-2xl xl:text-3xl font-medium ml-3 text-white footer-logo-title'>Easy Bazaar</h2>
                        </Link>
                        <p className='text-base text-white mt-4 footer-des'>Discover the ease and convenience of shopping with Easy Bazaar. Whether you are a seasoned online shopper or new to the world of e-commerce, we invite you to experience the difference for yourself. Welcome to Easy Bazaar, where shopping is always a breeze!</p>
                    </div>
                    <div className='flex justify-end sm:justify-center md:justify-end xl:justify-center'>
                        <div className='text-white'>
                            <h4 className='text-xl font-bold capitalize title-footer'>categories</h4>
                            <ul className='p-0'>
                                {
                                    categories.map(category => <FooterCategory key={category.id} category={category}></FooterCategory>)
                                }
                            </ul>
                        </div>
                    </div> 
                    <div className='flex md:justify-end xl:justify-center'>
                        <div className='text-white'>
                            <h4 className='text-xl font-bold capitalize title-footer'>customer service</h4>
                            <ul className='p-0'>
                                {
                                    services.map(service => <FooterServices key={service.id} service={service}></FooterServices>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-end md:justify-start'>
                      <div>
                        <div className='text-white'>
                            <h4 className='text-xl font-bold mb-4 title-footer'>Payment Methods</h4>
                            <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 w-fit'>
                                {
                                    payments.map(methods => <Payments key={methods.id} methods={methods}></Payments>)
                                }
                            </div>
                        </div>
                        <div className='text-white text-sm-center text-lg-start mt-5'>
                            <h4 className='text-xl font-bold mb-3 title-footer'>Follow Us</h4>
                           <div className='grid grid-cols-4 sm:grid-cols-5 gap-3 w-fit social-icon'>
                           {
                            socialIcons.map((item,index)=>(
                                <FontAwesomeIcon
                                        key={index}
                                        className='border border-1 p-2 rounded-full w-[20px]'
                                        icon={item.icon}
                                       
                                    />
                            ))
                           }
                           </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;