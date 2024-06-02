import React, { useEffect, useState } from 'react';
import './Brands.css'
import { Link, useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Brands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch('https://easybazzar-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    })
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    brands.map(b => {
                        return <>
                            <SwiperSlide key={b.id}>
                                <Link to={`/brandsproduct/${b.id}`} className='border-3 border-black'>
                                    <img src={b.img} alt="" />
                                </Link>
                            </SwiperSlide>
                        </>
                    })
                }
            </Swiper>
        </>
    );
};

export default Brands;