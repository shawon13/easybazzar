import { useLoaderData } from 'react-router-dom';
import BrandsDetailsCard from './BrandsDetailsCard';

const BrandsDetails = () => {
    const brands = useLoaderData();
    console.log(brands)
    return (
        <section className='py-12'>
            <div className="container px-4 mx-auto">
                <h4 className='orange text-3xl mb-5'>{brands.length} items founds</h4>
                <div className='grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 products-grid'>
                    {
                        brands?.map(brand => <BrandsDetailsCard key={brand._id} brand={brand}></BrandsDetailsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BrandsDetails;