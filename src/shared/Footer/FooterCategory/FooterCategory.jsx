import React from 'react';
import { Link } from 'react-router-dom';

const FooterCategory = ({ category }) => {
    const { name, path } = category;
    return (
        <li className='list-unstyled my-2'>
            <Link to={path} className='text-white capitalize font-normal'>{name}</Link>
        </li>
    );
};

export default FooterCategory;