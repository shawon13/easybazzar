import React from 'react';

const Payments = ({ methods }) => {
    const { img } = methods;
    return (
        <img className='w-full h-10 rounded' src={img} alt="" />
    );
};

export default Payments;