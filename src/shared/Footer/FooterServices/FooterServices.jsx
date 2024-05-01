import React from 'react';
import { Link } from 'react-router-dom';

const FooterServices = ({ service }) => {
    const { name, path } = service;
    return (
        <li className='list-unstyled my-2'>
            <Link to={path} className='text-white font-normal'>{name}</Link>
        </li>
    );
};

export default FooterServices;