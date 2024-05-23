import React, { useContext } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { AddToCart } from '../../context/AddToCartContext';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { ProductQuantityContext } from '../../context/QuantityContext';

const Cart = () => {
    const { cart } = useContext(AddToCart)
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
    return (
        <section className='py-6'>
            <div className="container px-4 mx-auto">
                <div className='flex'>
                    <div style={{ width: '70%' }}>
                        {
                            cart.map(cp => {
                                return <>
                                    <div className='bg-white px-5 py-6 shadow-md rounded-md mr-5 mb-5 flex items-center'>
                                        <div className='flex items-center justify-between w-3/5'>
                                            <div className='flex'>
                                                <img src={cp.image} className='w-16 h-16' alt="" />
                                                <div className='ml-3'>
                                                    <h4>{cp.name}</h4>
                                                    <span className='text-sm text-gray-500'>No Brand</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-1/5'>
                                            <div className='flex items-center justify-center text-xl orangeColor'>
                                                <TbCurrencyTaka className='text-xl' />
                                                <span>{cp.current_price}</span>
                                            </div>
                                            <div className='flex items-center justify-center text-xs line-through'>
                                                <TbCurrencyTaka className='text-base' />
                                                <span>{cp.original_price}</span>
                                            </div>
                                            <span className='ml-2 text-xs text-center w-full block'>{cp.discount}</span>
                                        </div>
                                        <div className='flex w-1/5'>
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
                                        <span className='cursor-pointer bg-orange-100 rounded-full w-8 h-8 flex justify-center items-center'>
                                            <RiDeleteBinLine className='text-base orangeColor' />
                                        </span>
                                    </div>
                                </>
                            })
                        }
                    </div>
                    <div style={{ width: '30%', height: '230px' }} className=' bg-white px-5 py-6 shadow-md rounded-md'>
                        <div>
                            <h4 className='text-xl font-medium text-black capitalize'>order summary</h4>
                            <div className='flex items-center justify-between my-2'>
                                <h4 className='text-base font-normal text-black capitalize'>Subtotal ({cart.length} items)</h4>
                                <div className='flex items-center justify-between'>
                                    <TbCurrencyTaka className='text-black text-xl' />
                                    <span>55</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between my-2'>
                                <h4 className='text-base font-normal text-black capitalize'>delivery fee</h4>
                                <div className='flex items-center justify-between'>
                                    <TbCurrencyTaka className='text-black text-xl' />
                                    <span>55</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between my-2'>
                                <h4 className='text-base font-normal text-black capitalize'>total</h4>
                                <div className='flex items-center justify-between orangeColor'>
                                    <TbCurrencyTaka className='text-black text-xl orangeColor' />
                                    <span>155</span>
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <Link to='/buynow' className='text-white bg-orange uppercase font-normal block w-full py-2 text-sm'>proceed to checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;