import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FlashSale = ({ sale }) => {
    console.log(sale)
    const { image, name, original_price, current_price, discount } = sale;
    return (
        <div className='border border-gray-300 w-52 mx-2'>
            <img className='w-full h-48' src={image} alt="" />
            <div className='p-2'>
                <h4>{name.slice(0, 35)}...</h4>
                <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> {current_price}</p>
                <div>
                    <p><FontAwesomeIcon icon={faBangladeshiTakaSign} /> {original_price}</p>
                    <span>{discount}</span>
                </div>
            </div>
        </div>
    );
};

export default FlashSale;