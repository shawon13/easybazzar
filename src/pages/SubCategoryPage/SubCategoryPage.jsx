import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubCategoryCard from './SubCategoryCard';

const SubCategoryPage = () => {
    const subcategorys = useLoaderData();
    return (
        <section className='py-12'>
            <div className="container px-4 mx-auto">
                <h4 className='orange text-3xl mb-5'>{subcategorys.length} items founds</h4>
                <div className='grid grid-cols-5 gap-5'>
                    {
                        subcategorys.map(subcategory => <SubCategoryCard key={subcategory.id} subcategory={subcategory}></SubCategoryCard>)
                    }
                </div>
            </div>
        </section>
    )
};

export default SubCategoryPage;