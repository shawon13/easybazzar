import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChildCategoryCard from './ChildCategoryCard';

const ChildCategoryPage = () => {
    const childs = useLoaderData();
    console.log(childs)
    return (
        <section className='py-12'>
            <div className="container px-4 mx-auto">
                <h4 className='orange text-3xl mb-5'>{childs.length} items founds</h4>
                <div className='flex gap-6'>
                    {
                        childs.map(childcategory => <ChildCategoryCard key={childcategory.id} childcategory={childcategory}></ChildCategoryCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ChildCategoryPage;