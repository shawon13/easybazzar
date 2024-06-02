import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BrandsDetailsCard from './BrandsDetailsCard';

const BrandsDetails = () => {
    const brands = useLoaderData();
    return (
        <section className='py-12'>
            <div className="container px-4 mx-auto">
                <h4 className='orange text-3xl mb-5'>{brands.length} items founds</h4>
                <div className='grid grid-cols-5 gap-5'>
                    {
                        brands.map(brand => <BrandsDetailsCard key={brand.id} brand={brand}></BrandsDetailsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BrandsDetails;