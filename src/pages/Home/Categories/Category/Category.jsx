import React from 'react';
import './category.css';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Subcategory from '../Subcategory/Subcategory';
const Category = ({ category }) => {
    // console.log(category)
    const { name, img } = category.category;
    // const { sub_name } = category.sub_categories.sub_category;
    return (
        <>
            <li className='flex items-center py-1.5 text-gray-400 relative	cursor-pointer category-li hover:text-black '>
                <span className="rounded-full bg-gray-100 w-6 h-6 relative items-center justify-center flex">
                    <img src={img} className="w-4 h-4" alt="" />
                </span>
                <span className='ml-3 text-sm category-title transition-all'>{name}</span>
                <span className='category-icon transition-all absolute top-50 right-0'>
                    <ChevronRightIcon className="h-4 w-4" />
                </span>

                {/* sub category */}
                <ul style={{ zIndex: 2, left: '270px' }} className='bg-white shadow-sm h-auto w-full rounded-md py-1.5 px-3 absolute top-2.5 subcategory-ul'>
                    {
                        category.sub_categories.map(subcategory => <Subcategory key={subcategory.id} subcategory={subcategory}></Subcategory>)
                    }
                </ul>
            </li>
        </>
    );
};

export default Category;