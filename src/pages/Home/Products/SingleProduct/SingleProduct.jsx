import React from 'react';
import './SingleProduct.css'
import { Link, useLoaderData } from 'react-router-dom';
import { TbCoinTaka, TbCurrencyTaka, TbTruckDelivery } from 'react-icons/tb';
import { FaMinus, FaPlus } from 'react-icons/fa';
import SingleRatingStar from './SingleRatingStar';

const SingleProduct = () => {
    const product = useLoaderData();
    console.log(product)
    const { current_price, discount, image, name, original_price, rating, star } = product;
    return (
        <section className='py-12'>
            <div className="container mx-auto px-4">
                <div className='bg-white flex'>
                    <div className='w-3/4 flex p-3'>
                        <div>
                            <div style={{ width: '350px', height: '350px' }}>
                                <img src={image} alt="" />
                            </div>
                        </div>
                        <div className='ml-5 w-full'>
                            <div>
                                <h4 className='text-2xl font-normal mb-2'>{name}</h4>
                                <div className='flex items-center'>
                                    <SingleRatingStar className='text-lg' rating={star} />
                                    <p className='ml-2 text-sm'><span className='mr-1'>{rating}</span>Ratings</p>
                                </div>
                                <h5 className='text-gray-400 font-normal'>Brand: <Link className='text-sm'>No Brand</Link></h5>
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
                                    <button style={{ borderColor: 'transparent' }} className="w-10 h-10 p-2.5 bg-gray-100 hover:bg-gray-300 rounded-none quantity-btn">
                                        <FaMinus className='transition-all text-gray-400 text-sm quantity-icon' />
                                    </button>
                                    <input
                                        type="text"
                                        value='0'
                                        className="text-center w-10"
                                    />
                                    <button style={{ borderColor: 'transparent' }} className="w-10 h-10 p-2.5 bg-gray-100 hover:bg-gray-300 rounded-none quantity-btn">
                                        <FaPlus className='transition-all text-gray-400 text-sm quantity-icon' />
                                    </button>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <Link className='text-white bg-sky capitalize font-normal px-20 py-3 mr-3'>buy now</Link>
                                <Link className='text-white bg-orange capitalize font-normal px-20 py-3'>Add to cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4 bg-gray-100 p-3'>
                        <div>
                            <h5>delivery</h5>
                            <div>

                                <h4>standard delivery <span>5-9 days</span></h4>
                                <span><TbCurrencyTaka style={{ marginRight: "-2px" }} className='orangeColor text-3xl' />90</span>
                            </div>
                            <div>
                                <TbCoinTaka />
                                <h4>case on delivery avilable</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;