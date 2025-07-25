import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Category from './Category/Category';
import {
    useQuery,
} from '@tanstack/react-query'

const Categories = () => {
    const axiosPublic = useAxiosPublic();
    const { data: categories = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axiosPublic.get('/categories');
            return res.data;
        }
    })
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