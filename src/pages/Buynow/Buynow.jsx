import React, { useContext } from 'react';
import { GoPlus } from 'react-icons/go';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { BuyContext } from '../../context/BuynowContext';

const Buynow = () => {
    const { buy } = useContext(BuyContext);
    console.log(buy)
    return (
        <section className='py-6'>
            <div className="container px-4 mx-auto">
                <div className='flex'>
                    <div style={{ width: '70%' }} className=''>
                        {
                            buy.map(bp => {
                                return <>
                                    <div className='bg-white px-5 py-6 shadow-md rounded-md mr-5'>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex'>
                                                <img src={bp.image} className='w-16 h-16' alt="" />
                                                <div className='ml-3'>
                                                    <h4>{bp.name}</h4>
                                                    <span className='text-sm text-gray-500'>No Brand</span>
                                                </div>
                                            </div>
                                            <div>
                                                <span className='text-sm'>Qty:{bp.quantity}</span>
                                            </div>
                                            <div className='flex justify-between items-center'>
                                                <div style={{ backgroundColor: '#F5F5F5' }} className='flex justify-between items-center px-1'>
                                                    <div className='flex justify-between items-center text-xs line-through'>
                                                        <TbCurrencyTaka className='text-base' />
                                                        <span>{bp.original_price}</span>
                                                    </div>
                                                    <span className='ml-2 text-xs'>{bp.discount}</span>
                                                </div>
                                                <div className='flex items-center justify-between text-sm ml-2'>
                                                    <TbCurrencyTaka className='text-base' />
                                                    <span>{bp.current_price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='my-3' />
                                        <div className=''>
                                            <div className='flex items-center justify-end text-base'>
                                                <h4>item(s).subtotal:</h4>
                                                <span className='flex items-center orangeColor'><TbCurrencyTaka />55</span>
                                            </div>
                                            <div className='flex items-center justify-end text-sm text-gray-500'>
                                                <h4 className='capitalize'>saved</h4>
                                                <span className='flex items-center'><TbCurrencyTaka />55</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>
                    <div style={{ width: '30%' }} className=' bg-white px-5 py-6 shadow-md rounded-md'>
                        <h4>Discount and Payment</h4>
                        <div className='mt-3'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img className='w' src="https://i.ibb.co/r3jpY5V/promocode.png" alt="" />
                                    <h2 className='ml-2'>Promo code</h2>
                                </div>
                                <div className='flex items-center'>
                                    <p className='text-sm text-gray-400 font-normal capitalize'>Enter code</p>
                                    <MdKeyboardArrowRight className='text-2xl' />
                                </div>
                            </div>
                            <div className='flex items-center mt-3.5'>
                                <input type="text" name="" id="" className='w-full border border-r-0 py-2 px-2.5 outline-none' placeholder='Enter Code' />
                                <button className='bg-transparent border border-gray-200 border-l-0 rounded-none hover:border-gray-200 py-2 px-2.5'>Confirm</button>
                            </div>
                        </div>
                        <hr className='my-4' />
                        <div>
                            <h4 className='text-base font-normal text-black capitalize'>order summary</h4>
                            <div className='flex items-center justify-between my-2'>
                                <h4 className='text-base font-normal text-black capitalize'>items Total</h4>
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
                                <h4 className='text-base font-normal text-black capitalize'>total payment</h4>
                                <div className='flex items-center justify-between'>
                                    <TbCurrencyTaka className='text-black text-xl' />
                                    <span>55</span>
                                </div>
                            </div>
                            <span className='text-end w-full block text-sm text-gray-400'>VAT included,where applicable</span>
                            <div className='text-center mt-4'>
                                <Link className='text-white bg-orange capitalize font-normal block w-full py-2 text-sm'>place order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Buynow;