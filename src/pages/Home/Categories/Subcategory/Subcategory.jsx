import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Childcategory from '../Childcategory/Childcategory';
const Subcategory = ({ subcategory }) => {
    const { sub_name, category_id } = subcategory.sub_category;
    return (
        <>
            <li className='cursor-pointer py-1.5  '>
                <Link to={`/categories/${category_id}`} className='flex justify-between subcategory-link'>
                    <span className='capitalize text-sm subcategory-title transition-all text-gray-400 '>{sub_name}</span>
                    <span>
                        <ChevronRightIcon className="h-4 w-4 subcategory-icon transition-all text-gray-400" />
                    </span>
                </Link>

                <ul style={{ zIndex: 2, left: '280px' }} className=' bg-white shadow-sm h-full w-full rounded-md py-1.5 px-3 absolute top-0'>
                    {
                        subcategory.child_categories.map(childcategory => <Childcategory key={childcategory.id} childcategory={childcategory}></Childcategory>)
                    }
                </ul>
            </li>

        </>
    );
};

export default Subcategory;