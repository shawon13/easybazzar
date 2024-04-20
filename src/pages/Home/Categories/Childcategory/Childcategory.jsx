import React from 'react';
import { Link } from 'react-router-dom';

const Childcategory = ({ childcategory }) => {
    const { child_name } = childcategory;
    return (
        <li className='cursor-pointer sub-category-li py-1.5'>
            <Link className='text-gray-400 hover:text-black'>
                <span className='capitalize text-sm sub-category-title transition-all'>{child_name}</span>
            </Link>
        </li>
    );
};

export default Childcategory;