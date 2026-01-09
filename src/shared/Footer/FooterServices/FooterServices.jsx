import React from 'react';
import { Link } from 'react-router-dom';

const FooterServices = ({ service }) => {
    const { name, path } = service;
    return (
        <li className='list-unstyled my-2 footer-li'>
            <Link to={path} className='font-normal' style={{color:'#fff'}}>{name}</Link>
        </li>
    );
};

export default FooterServices;