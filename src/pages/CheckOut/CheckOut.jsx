import { useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';

const CheckOut = () => {
    const [cart, setCart] = useState()

    return (
        <section className='py-6'>
            <div className="container px-4 mx-auto">
                <div className='flex'>
                    <div style={{ width: '70%' }}>
                        {
                            cart?.map(cp => {
                                return <>
                                    <div className='bg-white px-5 py-6 shadow-md rounded-md mr-5 mb-5'>
                                        <div className='flex items-center'>
                                            <div className='flex items-center justify-between w-3/5'>
                                                <div className='flex'>
                                                    <img src={cp.image} className='w-16 h-16' alt="" />
                                                    <div className='ml-3 mr-3'>
                                                        <h4 className='text-sm'>{cp.name}</h4>
                                                        <span className='text-sm text-gray-500'>No Brand</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='text-center' style={{ width: '10%' }}>
                                                <span className='text-sm'>Qty:</span>
                                            </div>
                                            <div className='flex justify-center items-center' style={{ width: '10%' }}>
                                                <span className='cursor-pointer bg-orange-100 rounded-full w-8 h-8 flex justify-center items-center'>
                                                    <RiDeleteBinLine className='text-base orangeColor' />
                                                </span>
                                            </div>
                                            <div className='flex justify-end items-center w-1/5'>
                                                <div style={{ backgroundColor: '#F5F5F5' }} className='flex justify-between items-center px-1'>
                                                    <div className='flex justify-between items-center text-xs line-through'>
                                                        <TbCurrencyTaka className='text-base' />
                                                        <span>{cp.original_price}</span>
                                                    </div>
                                                    <span className='ml-2 text-xs'>{cp.discount}</span>
                                                </div>
                                                <div className='flex items-center justify-between text-sm ml-2'>
                                                    <TbCurrencyTaka className='text-base' />
                                                    <span>{cp.current_price}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className='my-3' />
                                        <div className=''>
                                            <div className='flex items-center justify-end text-base'>
                                                <h4>item(s).subtotal:</h4>
                                                <span className='flex items-center orangeColor'><TbCurrencyTaka />{subTotal}</span>
                                            </div>
                                            <div className='flex items-center justify-end text-sm text-gray-500'>
                                                <h4 className='capitalize'>saved</h4>
                                                <span className='flex items-center'><TbCurrencyTaka />{savedPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })
                        }
                    </div>
                    <div style={{ width: '30%', height: '230px' }} className=' bg-white px-5 py-6 shadow-md rounded-md'>
                        <div>
                            <h4 className='text-xl font-medium text-black capitalize'>order summary</h4>
                            <div className='flex items-center justify-between my-2'>
                                <h4 className='text-base font-normal text-black capitalize'>Items Total</h4>
                                <div className='flex items-center justify-between'>
                                    <TbCurrencyTaka className='text-black text-xl' />
                                    <span>{subTotal}</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between my-2'>
                                <h4 className='text-base font-normal text-black capitalize'>delivery fee</h4>
                                <div className='flex items-center justify-between'>
                                    <TbCurrencyTaka className='text-black text-xl' />
                                    <span id='delivery-charge'>{deliveryCharge}</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-between my-2'>
                                <h4 className='text-base font-normal text-black capitalize'>total</h4>
                                <div className='flex items-center justify-between orangeColor'>
                                    <TbCurrencyTaka className='text-black text-xl orangeColor' />
                                    <span>{total}</span>
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <Link className='text-white bg-orange uppercase font-normal block w-full py-2 text-sm'>place order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckOut;