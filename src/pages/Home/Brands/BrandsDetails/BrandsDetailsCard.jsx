
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Ratingstar from '../../Products/Ratingstar';


const BrandsDetailsCard = ({ brand }) => {
    const { image, name, original_price, current_price, discount, star } = brand;
    return (
        <Link to={`/product/${name}`} className='hover:shadow-lg bg-white transition-all w-auto'>
            <div className="flex justify-center p-2">
                <img className="size-[240px] sm:size-[188px] img-size" src={image} alt="" />
            </div>
            <div className='p-2'>
                <h4 className='text-black text-sm sm:text-base'>{name.slice(0, 35)}...</h4>
                <div style={{ marginLeft: '-5px' }} className='flex items-center'>
                    <TbCurrencyTaka style={{ marginRight: "-2px" }} className='orangeColor text-xl sm:text-2xl' />
                    <p className='orangeColor sm:text-lg font-normal'>{current_price}</p>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center mr-1 line-through'>
                        <TbCurrencyTaka style={{ marginRight: "-2px" }} className='text-gray-500 text-lg' />
                        <p className='text-gray-500 text-sm'>{original_price}</p>
                    </div>
                    <span className='text-black text-sm sm:text-base'>{discount}</span>
                </div>
                <Ratingstar rating={star} />
            </div>
        </Link>
    );
};

export default BrandsDetailsCard;