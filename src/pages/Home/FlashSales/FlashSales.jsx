import './FlashSales.css'
import FlashSaleCard from './FlashSaleCard/FlashSaleCard';
import useProducts from '../../../hooks/useProducts';
import { useEffect, useState } from 'react';

const FlashSales = () => {
    const [products] = useProducts()

    const [startSales, setStartSales] = useState(0);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('flashSalesStartIndex'));
        setStartSales(saved)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (startSales + 24) % products.length;
            setStartSales(nextIndex)
            localStorage.setItem('flashSalesStartIndex', JSON.stringify(nextIndex))
        }, 12 * 60 * 60 * 1000);
        return () => clearInterval(interval)
    }, [startSales, products])
    const sales = products.slice(startSales, startSales + 24)



    return (
        <div>
            <div className='flash-sale-banner bg-center bg-no-repeat bg-cover'>

            </div>
            <section className='py-8'>
                <div className="container px-4 mx-auto">
                    <h4></h4>
                    <div className='grid grid-cols-6'>
                        {
                            sales.map(flashsale => <FlashSaleCard key={flashsale.id} flashsale={flashsale}></FlashSaleCard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FlashSales;