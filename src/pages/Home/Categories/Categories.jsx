import React, { useEffect, useState } from 'react';
import Category from './Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://easybazzar-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='bg-white shadow-sm h-full mr-5 rounded-md py-1.5 px-3 relative'>
            <ul>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </ul>
        </div>
    );
};

export default Categories;