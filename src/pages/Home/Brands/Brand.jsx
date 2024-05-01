import React from 'react';

const Brand = ({ brand }) => {
    const { img } = brand;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Brand;