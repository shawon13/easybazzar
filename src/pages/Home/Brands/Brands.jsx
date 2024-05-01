import React from 'react';
import Slider from 'react-slick';
import Brand from './Brand';

const Brands = () => {
    const brands = [
        {
            "id": 1,
            "img": "https://i.ibb.co/RPR7rw0/images.jpg"
        },
        {
            "id": 2,
            "img": "https://i.ibb.co/Gd4ybwD/bata.jpg"
        },
        {
            "id": 3,
            "img": "https://i.ibb.co/nr5vnQs/dettol.jpg"
        },
        {
            "id": 4,
            "img": "https://i.ibb.co/thPzKVb/parachute.jpg"
        },
        {
            "id": 5,
            "img": "https://i.ibb.co/qgyN3jJ/lotto.png"
        },
        {
            "id": 6,
            "img": "https://i.ibb.co/6DP2xjv/ponds.png"
        },
        {
            "id": 7,
            "img": "https://i.ibb.co/CH033B0/unilever.jpg"
        }
    ]
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <Slider className="text-center" {...settings}>
            {
                brands.map(brand => <Brand key={brand} brand={brand}></Brand>)
            }
        </Slider>
    );
};

export default Brands;