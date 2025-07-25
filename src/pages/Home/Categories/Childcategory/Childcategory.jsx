import { Link } from 'react-router-dom';

const Childcategory = ({ childcategory }) => {
    const { child_name, id } = childcategory;
    return (
        <li className='cursor-pointer childcategory-li py-1.5'>
            <Link to={`/categories/childcategory/${id}`} className=''>
                <span className='capitalize text-sm childcategory-title transition-all text-gray-400 hover:text-black'>{child_name}</span>
            </Link>
        </li>
    );
};

export default Childcategory;