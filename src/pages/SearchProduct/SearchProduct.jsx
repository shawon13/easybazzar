import React, { useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';

const SearchProduct = ({ product }) => {

    if (!product) {
        return <div>Loading...</div>
    }
    return (
        <Link to={`product/${product.id}`} className='hover:shadow-lg w-52 mx-2 transition-all'>
            <img className='w-full h-48' src={product.image} alt="" />
            <div className='p-2'>
                <h4 className='text-black'>{product.name.slice(0, 40)}...</h4>
                <div style={{ marginLeft: '-5px' }} className='flex items-center'>
                    <TbCurrencyTaka style={{ marginRight: "-2px" }} className='orangeColor text-2xl' />
                    <p className='orangeColor text-lg font-normal'>{product.current_price}</p>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center mr-1 line-through'>
                        <TbCurrencyTaka style={{ marginRight: "-2px" }} className='text-gray-500 text-lg' />
                        <p className='text-gray-500 text-sm'>{product.original_price}</p>
                    </div>
                    <span className='text-black'>{product.discount}</span>
                </div>
            </div>
        </Link>
    );
};

export default SearchProduct;