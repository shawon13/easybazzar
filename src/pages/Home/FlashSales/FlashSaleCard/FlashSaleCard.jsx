import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const FlashSaleCard = ({ flashsale }) => {
    const { id, image, name, original_price, current_price, discount } = flashsale;
    return (
        <div className='bg-white hover:shadow-lg m-1.5 rounded transition-all'>
            <img className='w-full h-48' src={image} alt="" />
            <div className='p-2 pb-4'>
                <h4 className='text-black'>{name.slice(0, 35)}...</h4>
                <div style={{ marginLeft: '-5px' }} className='flex items-center'>
                    <TbCurrencyTaka style={{ marginRight: "-2px" }} className='orangeColor text-2xl' />
                    <p className='orangeColor text-lg font-normal'>{current_price}</p>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center mr-1 line-through'>
                        <TbCurrencyTaka style={{ marginRight: "-2px" }} className='text-gray-600 text-lg' />
                        <p className='text-gray-600 text-sm'>{original_price}</p>
                    </div>
                    <span className='text-white bg-red-500 text-sm'>{discount}</span>
                </div>
                <div className='mt-4 text-center'>
                    <Link to={`/flashsale/${id}`} style={{ borderColor: '#f85606' }} className='orangeColor border py-1.5 px-2 uppercase font-normal text-xs text-center'>Buy Now</Link>
                </div>
            </div>
        </div>
    )
};

export default FlashSaleCard;