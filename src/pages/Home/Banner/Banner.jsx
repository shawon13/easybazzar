import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
const Banner = ({ slide }) => {
    const { img, des, title, p_title, price, sub_price } = slide;
    return (
        <div style={{ backgroundImage: `url(${img})`, height: '450px' }} className="bg-no-repeat bg-center bg-cover rounded-md">
            <div className="container mx-auto px-8 flex items-center h-full">
                <div className='w-1/2 px-16'>
                    <p className='text-4xl font-normal capitalize'>{des}</p>
                    <h2 className='text-6xl font-bold uppercase my-3'>{title}</h2>
                    <p className='text-xl uppercase font-bold mb-9'>{p_title}<span className='ml-5 text-4xl'><sup className='text-sm'><FontAwesomeIcon icon={faDollarSign} /></sup>{price}<sup className='text-sm'>{sub_price}</sup></span></p>
                    <Link className='px-8 py-4 bg-black hover:text-white text-white uppercase font-bold'>Shop Now</Link>
                </div>
                <div className='w-1/2'></div>
            </div>
        </div>
    );
};

export default Banner;