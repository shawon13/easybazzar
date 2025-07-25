import { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import Slider from 'react-slick';
import Benefits from '../Benefits/Benefits';
import Categories from '../Categories/Categories';
import { Link } from 'react-router-dom';
import FlashSale from '../FlashSale/FlashSale';
import Products from '../Products/Products';
import Brands from '../Brands/Brands';
import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosPublic from '../../../hooks/useAxiosPublic'
import useProducts from '../../../hooks/useProducts';


const productLoad = 18;
const Home = () => {
    //products
    const [products] = useProducts();

    // home banner
    const axiosPublic = useAxiosPublic();

    const { data: banners = [] } = useQuery({
        queryKey: ['banners'],
        queryFn: async () => {
            const res = await axiosPublic.get('/banners')
            return res.data;
        }
    })
    // features
    const { data: benefits = [] } = useQuery({
        queryKey: ["benefits"],
        queryFn: async () => {
            const res = await axiosPublic.get('/benefits');
            return res.data;
        }
    })

    //flashSales
    const [startSales, setStartSales] = useState(0);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('flashSaleStartIndex'));
        setStartSales(saved)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (startSales + 6) % products.length;
            setStartSales(nextIndex)
            localStorage.setItem('flashSaleStartIndex', nextIndex)
        }, 12 * 60 * 60 * 1000);
        return () => clearInterval(interval)
    }, [startSales, products])
    const sales = products.slice(startSales, startSales + 6)

    //all product
    const [next, setNext] = useState(productLoad);
    const handleLoadMore = () => {
        setNext(next + productLoad)
    }

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            {/* category and slider  section*/}
            <section className='mt-6'>
                <div className='container mx-auto px-4 flex'>
                    <div className='w-1/4'>
                        <Categories />
                    </div>
                    <div className='w-3/4 shadow-sm'>
                        <Slider {...settings}>
                            {
                                banners.map(slide => <Banner key={slide.id} slide={slide}></Banner>)
                            }
                        </Slider>
                    </div>
                </div>
            </section >
            {/* features section*/}
            <section className='pt-7'>
                <div className='container mx-auto px-4'>
                    <div className='px-4 py-3 rounded-md flex items-center justify-between transition bg-rose-50 hover:bg-rose-100'>
                        {
                            benefits.map(benefit => <Benefits key={benefit.id} benefit={benefit}></Benefits>)
                        }
                    </div>
                </div>
            </section >
            {/* flashSales section */}
            <section className='py-6'>
                <div className='container mx-auto px-4'>
                    <h4 className='text-neutral-500 text-2xl font-normal mb-3'>FlashSale</h4>
                    <div className='bg-white pb-7'>
                        <div className='flex justify-between items-center py-2 h-16 px-6 mb-7 border border-gray-300 border-t-0 border-l-0 border-r-0'>
                            <div className='flex'>
                                <div>
                                    <h4 className='text-base font-medium capitalize orangeColor mr-7'>on sale now</h4>
                                </div>
                            </div>
                            <div>
                                <Link to='/flashsales' style={{ borderColor: '#f85606' }} className='orangeColor border py-3 px-3 uppercase font-normal text-sm'>shop more</Link>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                {
                                    sales.map(sale => <FlashSale key={sale.id} sale={sale}></FlashSale>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* Product section */}
            <section className='pb-6'>
                <div className="container mx-auto px-4">
                    <h4 className='text-neutral-500 text-2xl font-normal mb-3 capitalize'>Just For You</h4>
                    <div className='grid grid-cols-6 gap-3'>
                        {
                            products.slice(0, next).map(product => <Products key={product.id} product={product}></Products>)
                        }
                    </div>
                    <div className='mt-8 text-center'>
                        {

                            next < products.length && <button onClick={handleLoadMore} style={{ borderColor: '#f85606', borderRadius: '0px !important' }} className='py-3 cursor-pointer orangeColor outline-none rounded-none border w-1/4 uppercase font-normal text-sm'>load more</button>
                        }
                    </div>
                </div>
            </section>
            <section className='py-6 mb-12 border border-t-0 border-l-0 border-r-0 border-gray-200'>
                <div className='container mx-auto px-4'>
                    <div className='relative'>
                        <h3 className='text-center uppercase text-black text-lg font-bold mb-8'>Shop our Top brands</h3>
                        <p className='hr mb-0'></p>
                        <p className='hr-two mb-0'></p>
                    </div>
                    <Brands />
                </div>
            </section>
        </>
    );
};

export default Home;