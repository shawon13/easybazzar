import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Banner = ({ slide }) => {
  const { img, des, title, p_title, price, sub_price } = slide;
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="h-[300px] sm:h-[310px]  md:h-[375px] lg:h-[375px] xl:h-[475px] 2xl:h-[575px] w-full bg-no-repeat bg-center bg-cover rounded-md slider-bg-img"
    >
      <div className="container mx-auto px-4 flex items-center h-full">
        <div className="w-full pl-20 pb-3 sm:pb-8 slider-content-box">
          <p className="text-xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-normal capitalize des">
            {des}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold uppercase my-2 md:my-3 xl:my-5 slider-title">
            {title}
          </h2>
          <div className="flex items-center">
            <p className="text-sm sm:text-xl xl:text-3xl uppercase font-bold mr-2">
              {p_title}
            </p>
            <FaBangladeshiTakaSign className="text-xl xl:text-3xl ml-2" />
            <span className="text-2xl sm:text-4xl xl:text-5xl 2xl:text-6xl">
              {price}
            </span>
            <sup className="text-sm xl:text-2xl">{sub_price}</sup>
          </div>
          <div className="slider-btn-box mt-4 sm:mt-6 2xl:mt-7">
            <Link
              style={{ color: "#fff" }}
              className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 2xl:px-10 2xl:py-5 bg-black hover:text-white text-white uppercase font-bold"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* <div className="w-[0px] sm:w-1/2"></div> */}
      </div>
    </div>
  );
};

export default Banner;
