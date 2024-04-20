import React from 'react';

const Benefits = ({ benefit }) => {
    const { img, title } = benefit;
    return (
        < div className="flex" >
            <img src={img} alt="" />
            <h4 className="ml-3 capitalize">{title}</h4>
        </div>
    );
};

export default Benefits;