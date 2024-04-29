import React from 'react';
import './FlashSales.css'
import { useLoaderData } from 'react-router-dom';
import FlashSaleCard from './FlashSaleCard/FlashSaleCard';
import Timer from './Timer/Timer';

const FlashSales = () => {
    const flashsales = useLoaderData();
    return (
        <div>
            <div className='flash-sale-banner bg-center bg-no-repeat bg-cover'>

            </div>
            <section className='bg-white h-16 items-center flex'>
                <div className="container mx-auto px-4">
                    <div className='flex items-center'>
                        <div>
                            <h4 className='text-base font-medium capitalize orangeColor mr-7'>on sale now</h4>
                        </div>
                        <div className='flex items-center'>
                            <h4 className='text-base font-medium text-black mr-2'>Ending in</h4>
                            <Timer duration={12 * 60 * 60 * 1000} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-8'>
                <div className="container px-4 mx-auto">
                    <h4></h4>
                    <div className='grid grid-cols-6'>
                        {
                            flashsales.map(flashsale => <FlashSaleCard key={flashsale.id} flashsale={flashsale}></FlashSaleCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlashSales;