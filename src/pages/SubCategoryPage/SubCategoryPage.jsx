import { useLoaderData } from 'react-router-dom';
import SubCategoryCard from './SubCategoryCard';
const SubCategoryPage = () => {
    const subcategorys = useLoaderData();
    return (
        <section className='py-12'>
            <div className="container px-4 mx-auto">
                <h4 className='orange text-2xl sm:text-3xl mb-5'>{subcategorys.length} items founds</h4>
                <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 products-grid'>
                    {
                        subcategorys.map(subcategory => <SubCategoryCard key={subcategory.id} subcategory={subcategory}></SubCategoryCard>)
                    }
                </div>
            </div>
        </section>
    )
};

export default SubCategoryPage;