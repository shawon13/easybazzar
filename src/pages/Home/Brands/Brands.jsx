
import './Brands.css'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Brands = () => {
    const axiosPublic = useAxiosPublic()
    const { data: brands = [] } = useQuery({
        queryKey: ["brands"],
        queryFn: async () => {
            const res = await axiosPublic.get('/brands');
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
                                <Link to={`/brandsProducts/${brand.category_id}`} className=''>
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