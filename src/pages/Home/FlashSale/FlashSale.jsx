import React from 'react';

const FlashSale = ({ sale }) => {
    console.log(sale)
    const { images, title, price } = sale;
    return (
        <div>
            <img className='w-44 h-44' src={images[2]} alt="" />
            <h4>{title}</h4>
            <p>{price}</p>
        </div>
    );
};

export default FlashSale;