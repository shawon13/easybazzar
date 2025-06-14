
import './Brands.css'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Brands = () => {
    const axiosSecure = useAxiosSecure()
    const { data: brands = [] } = useQuery({
        queryKey: ["brands"],
        queryFn: async () => {
            const res = await axiosSecure.get('/brands');
            return res.data;
        }
    })
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    brands.map(brand => {
                        return <>
                            <SwiperSlide key={brand._id}>
                                <Link to={`/brandsproducts/${brand.category_id}`} className='border-3 border-black'>
                                    <img src={brand.img} alt="" />
                                </Link>
                            </SwiperSlide>
                        </>
                    })
                }
            </Swiper>
        </>
    );
};

export default Brands;