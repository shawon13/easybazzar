import React from 'react';

const Payments = ({ methods }) => {
    const { img } = methods;
    return (
        <img className='w-[55px] h-8 rounded' src={img} alt="" />
    );
};

export default Payments;