import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router-dom';

const BrandBuynow = () => {
    const buynowProduct = useLoaderData();
    const { current_price, discount, image, name, original_price, quantity } = buynowProduct;

    const buyQuantity = quantity;

    const originalPrice = original_price * buyQuantity;
    const subTotal = current_price * buyQuantity;
    const itemsTotal = current_price * buyQuantity;
    const savedPrice = originalPrice - subTotal;

    const [deliveryCharge, setDeliveryCharge] = useState(55);

    useEffect(() => {
        const deliveryChargeElement = document.getElementById('delivery-charge');
        const deliveryChargeAmount = parseInt(deliveryChargeElement.innerText);
        if (subTotal > 500) {
            setDeliveryCharge(150)
        }
        else {
            setDeliveryCharge(deliveryChargeAmount);
        }
    }, []);

    const total = itemsTotal + deliveryCharge;
    return (
        <section className='py-6'>
            <div className="container px-4 mx-auto">
                <div className='flex'>
                    <div style={{ width: '70%' }} className=''>
                        <div className='bg-white px-5 py-6 shadow-md rounded-md mr-5 mb-5'>
                            <div className='flex items-center justify-between'>
                                <div className='flex w-7/12'>
                                    <img src={image} className='w-16 h-16' alt="" />
                                    <div className='ml-3 pr-3'>
                                        <h4 className='text-sm'>{name}</h4>
                                        <span className='text-sm text-gray-500'>No Brand</span>
                                    </div>
                                </div>
                                <div className='text-center' style={{ width: '10%' }}>
                                    <span className='text-sm'>Qty:{buyQuantity}</span>
                                </div>
                                <div className='flex justify-end items-center w-1/4'>
                                    <div style={{ backgroundColor: '#F5F5F5' }} className='flex justify-between items-center px-1'>
                                        <div className='flex justify-between items-center text-xs line-through'>
                                            <TbCurrencyTaka className='text-base' />
                                            <span>{original_price}</span>
                                        </div>
                                        <span className='ml-2 text-xs'>{discount}</span>
                                    </div>
                                    <div className='flex items-center justify-between text-sm ml-2'>
                                        <TbCurrencyTaka className='text-base' />
                                        <span>{current_price}</span>
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
                    </div>
                    <div style={{ width: '30%' }} className=' bg-white px-5 py-6 shadow-md rounded-md h-96'>
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
                            <h4 className='text-xl font-medium text-black capitalize'>order summary</h4>
                            <div className='flex items-center justify-between my-2'>
                                <h4 className='text-base font-normal text-black capitalize'>items Total</h4>
                                <div className='flex items-center justify-between'>
                                    <TbCurrencyTaka className='text-black text-xl' />
                                    <span>{itemsTotal}</span>
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
                                <h4 className='text-base font-normal text-black capitalize'>total payment</h4>
                                <div className='flex items-center justify-between'>
                                    <TbCurrencyTaka className='text-black text-xl' />
                                    <span>{total}</span>
                                </div>
                            </div>
                            <div className='text-center mt-5'>
                                <Link className='text-white bg-orange capitalize font-normal block w-full py-2 text-sm'>place order</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandBuynow;