import React from 'react';
import { Link } from 'react-router-dom';

const FooterCategory = ({ category }) => {
    const { name, path } = category;
    return (
        <li className='list-unstyled my-2 text-base footer-li'>
            <Link to={path} className='capitalize font-normal' style={{color:'#fff'}}>{name}</Link>
        </li>
    );
};

export default FooterCategory;