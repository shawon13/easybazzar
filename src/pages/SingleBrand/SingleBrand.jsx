import React, { useContext } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { TbCoinTaka, TbCurrencyTaka } from 'react-icons/tb';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import SingleRatingStar from '../Home/Products/SingleProduct/SingleRatingStar';
import { AddToCart } from '../../context/AddToCartContext';
import { toast } from 'react-toastify';
import { addToDb } from '../../utilities/fakedb';
import { BuyContext } from '../../context/BuynowContext';
import { ProductQuantityContext } from '../../context/QuantityContext';
import delivery from '../../assets/courier.png'
import { AuthContext } from '../../Provider/AuthProvider';
const SingleBrand = () => {
    const singlebrand = useLoaderData();
    console.log(singlebrand)
    // console.log(product)
    const { current_price, discount, image, name, original_price, rating, star, brand } = singlebrand;
    //Product Quntity
    const { productQuantity, setProductQuantity } = useContext(ProductQuantityContext);
    const inQuantity = () => {
        if (productQuantity < 5) {
            setProductQuantity(productQuantity + 1);
        }
    }
    const deQuantity = () => {
        if (productQuantity > 1) {
            setProductQuantity(productQuantity - 1);
        }
    }
    // buy now function
    const { buy, setBuy } = useContext(BuyContext);
    const handleBuyNow = () => {
        setBuy([...buy, singlebrand])
    }
    // add to cart function
    const location = useLocation();
    console.log(location)
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const { cart, setCart } = useContext(AddToCart);
    const handleAddToCart = () => {
        if (!user) {
            navigate(from)
        }
        else {
            const exists = cart.find(pd => pd.id === singlebrand.id);
            if (!exists) {
                toast('Product already Add!')
                setCart([...cart, singlebrand])
            }
        }
    }


    return (
        <section className='py-12'>
            <div className="container mx-auto px-4">
                <div className='bg-white flex'>
                    <div className='w-3/4 flex p-3 pb-12'>
                        <div>
                            <div style={{ width: '350px', height: '350px' }}>
                                <img src={image} className='w-full' style={{ height: '350px' }} alt="" />
                            </div>
                        </div>
                        <div className='ml-5 w-full'>
                            <div>
                                <h4 className='text-2xl font-normal mb-2'>{name}</h4>
                                <div className='flex items-center'>
                                    <SingleRatingStar className='text-lg' rating={star} />
                                    <p className='ml-2 text-sm'><span className='mr-1'>{rating}</span>Ratings</p>
                                </div>
                                <h5 className='text-gray-400 font-normal'>Brand: <Link className='text-sm'>{brand}</Link></h5>
                            </div>
                            <hr className='my-3' />
                            <div style={{ marginLeft: '-5px' }} className='flex items-center'>
                                <TbCurrencyTaka style={{ marginRight: "-2px" }} className='orangeColor text-3xl' />
                                <p className='orangeColor text-3xl font-normal'>{current_price}</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='flex items-center mr-1 line-through'>
                                    <TbCurrencyTaka style={{ marginRight: "-2px" }} className='text-gray-500 text-lg' />
                                    <p className='text-gray-500 text-sm'>{original_price}</p>
                                </div>
                                <span className='text-black'>{discount}</span>
                            </div>
                            <div className='flex items-center mt-4'>
                                <span className='text-base text-gray-400 font-normal mr-10'>Quantity</span>
                                <div className='flex'>
                                    <button onClick={deQuantity} style={{ borderColor: 'transparent' }} className="w-10 h-10 p-2.5 bg-gray-100 hover:bg-gray-300 rounded-none quantity-btn flex items-center justify-center">
                                        <FaMinus className='transition-all text-gray-400 text-sm quantity-icon' />
                                    </button>
                                    <input
                                        type="text"
                                        value={productQuantity}
                                        className="text-center w-10"
                                    />
                                    <button onClick={inQuantity} style={{ borderColor: 'transparent' }} className="w-10 h-10 p-2.5 bg-gray-100 hover:bg-gray-300 rounded-none quantity-btn flex items-center justify-center">
                                        <FaPlus className='transition-all text-gray-400 text-sm quantity-icon' />
                                    </button>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <Link onClick={handleBuyNow} to='/buynow' className='text-white bg-sky capitalize font-normal px-20 py-4 mr-2.5'>buy now</Link>
                                <button onClick={handleAddToCart} className='text-white bg-orange capitalize font-normal px-20 py-3 rounded-none'>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4 bg-gray-100 p-4'>
                        <div>
                            <h5 className='text-sm text-gray-600 capitalize'>delivery</h5>
                            <div className='flex items-center justify-between mt-3'>
                                <img src={delivery} className='w' alt="" />
                                <h4 className='text-base capitalize text-black font-semibold'>standard delivery<span className='ml-2 text-sm font-normal text-gray-400'>5-9 days</span></h4>
                                <div className='flex items-center'>
                                    <TbCurrencyTaka className='text-black text-xl' />
                                    <span className='text-black'>90</span>
                                </div>
                            </div>
                            <div className='flex mt-3'>
                                <TbCoinTaka className='text-xl' />
                                <h4 className='ml-3 text-base capitalize text-black font-normal'>case on delivery avilable</h4>
                            </div>
                        </div>
                        <hr className='my-3' />
                        <div>
                            <h5 className='text-sm text-gray-600 capitalize'>service</h5>
                            <div className='flex mt-3'>
                                <img src="https://i.ibb.co/BV4VvZj/pic5.png" className='w' alt="" />
                                <div className='ml-3'>
                                    <h4 className='text-base capitalize text-black font-normal'>100% authentic from trusted brand</h4>
                                    <span className='text-xs text-gray-400 font-normal capitalize'>or get 2x your money back</span>
                                </div>
                            </div>
                            <div className='flex mt-3'>
                                <img src="https://i.ibb.co/fYzJYFX/pic3.png" className='w' alt="" />
                                <div className='ml-3'>
                                    <h4 className='text-base capitalize text-black font-normal'>14 days free & easy return</h4>
                                    <span className='text-xs text-gray-400 font-normal capitalize'>change of mind applicable</span>
                                </div>
                            </div>
                            <div className='flex items-center mt-3'>
                                <img src="https://i.ibb.co/HFJcxmC/shaid.png" className='w' alt="" />
                                <h4 className='ml-3 text-base capitalize text-black font-normal'>warranty not available</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleBrand;