import React from 'react';
import './Brands.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Brands = () => {
    return (
        <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            navigation
        >
            <SwiperSlide>unilever</SwiperSlide>
            <SwiperSlide>lotto</SwiperSlide>
            <SwiperSlide>parachute</SwiperSlide>
            <SwiperSlide>apex</SwiperSlide>
            <SwiperSlide>dettol</SwiperSlide>
            <SwiperSlide>pond's</SwiperSlide>
            <SwiperSlide>bata</SwiperSlide>
        </Swiper>
    );
};

export default Brands;