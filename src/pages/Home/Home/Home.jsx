import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Slider from 'react-slick';
import Benefits from '../Benefits/Benefits';
import Categories from '../Categories/Categories';
import { Link } from 'react-router-dom';
import FlashSale from '../FlashSale/FlashSale';
import Timer from '../FlashSales/Timer/Timer';
const Home = () => {
    const sliders = [
        {
            "id": 1,
            "img": "https://i.ibb.co/jf8JMt4/slide-2.jpg",
            "des": "Over 200 products with discounts",
            "title": "Great Deals",
            "p_title": "Starting At",
            "price": "299",
            "sub_price": "99"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/9gVymTH/slide-3.jpg",
            "des": "Up to 70% off",
            "title": "New Arrivals",
            "p_title": "Starting At",
            "price": "199",
            "sub_price": "99"
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/hXLkp1P/home-slider1.jpg",
            "des": "New Brown Collection",
            "title": "Summer Sale",
            "p_title": "Starting At",
            "price": "39",
            "sub_price": "99"
        },
        {
            "id": 4,
            "img": "https://i.ibb.co/FbPsSZV/sandel.jpg",
            "des": "Must Have",
            "title": "SANDALS",
            "p_title": "Starting At",
            "price": "19",
            "sub_price": "99"
        },
        {
            "id": 5,
            "img": "https://i.ibb.co/3h3hR69/slide1.jpg",
            "des": "start the revolution",
            "title": "drone pro 4",
            "p_title": "Starting At",
            "price": "499",
            "sub_price": "99"
        },
        {
            "id": 6,
            "img": "https://i.ibb.co/DkRVgrW/slide-1.jpg",
            "des": "Find the Boundaries. Push Through!",
            "title": "Smartphones",
            "p_title": "Starting At",
            "price": "199",
            "sub_price": "99"
        }
    ]
    const benefits = [
        {
            "id": 1,
            "img": "https://i.ibb.co/pd1xHsf/pic1.png",
            "title": "Safe payments"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/DMtcJLz/pic2.png",
            "title": "nationwide Delivery"
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/fYzJYFX/pic3.png",
            "title": "Free & Easy Return"
        },
        {
            "id": 4,
            "img": "https://i.ibb.co/DDSZ34t/pic4.png",
            "title": "best price Guaranteed"
        },
        {
            "id": 5,
            "img": "https://i.ibb.co/BV4VvZj/pic5.png",
            "title": "100% Authentic products",
        }
    ]
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [flashSales, setFlashSales] = useState([])
    useEffect(() => {
        fetch('https://easybazzar-server.vercel.app/flashsales')
            .then(res => res.json())
            .then(data => setFlashSales(data))
    }, [])
    return (
        <>
            <section className='mt-6'>
                <div className='container mx-auto px-4 flex'>
                    <div className='w-1/4'>
                        <Categories />
                    </div>
                    <div className='w-3/4 shadow-sm'>
                        <Slider {...settings}>
                            {
                                sliders.map(slide => <Banner key={slide.id} slide={slide}></Banner>)
                            }
                        </Slider>
                    </div>
                </div>
            </section >
            <section className='pt-7'>
                <div className='container mx-auto px-4'>
                    <div className='px-4 py-3 rounded-md flex items-center justify-between transition bg-rose-50 hover:bg-rose-100'>
                        {
                            benefits.map(benefit => <Benefits key={benefit.id} benefit={benefit}></Benefits>)
                        }
                    </div>
                </div>
            </section >
            <section className='py-6'>
                <div className='container mx-auto px-4'>
                    <h4 className='text-neutral-500 text-2xl font-normal mb-3'>FlashSale</h4>
                    <div className='bg-white pb-7'>
                        <div className='flex justify-between items-center py-2 h-16 px-6 mb-7 border border-gray-300 border-t-0 border-l-0 border-r-0'>
                            <div className='flex'>
                                <div>
                                    <h4 className='text-base font-medium capitalize orangeColor mr-7'>on sale now</h4>
                                </div>
                                <div className='flex items-center'>
                                    <h4 className='text-base font-medium text-black mr-2'>Ending in</h4>
                                    <Timer duration={12 * 60 * 60 * 1000} />
                                </div>
                            </div>
                            <div>
                                <Link to='/flashsales' style={{ borderColor: '#f85606' }} className='orangeColor border py-3 px-3 uppercase font-normal text-sm'>shop more</Link>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                {
                                    flashSales.slice(13, 19).map(sale => <FlashSale key={sale.id} sale={sale}></FlashSale>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Home;