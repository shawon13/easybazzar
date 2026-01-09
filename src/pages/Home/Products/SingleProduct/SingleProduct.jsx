import { useContext, useState } from "react";
import "./SingleProduct.css";
import { Link, useLoaderData } from "react-router-dom";
import { TbCoinTaka, TbCurrencyTaka } from "react-icons/tb";
import { FaMinus, FaPlus } from "react-icons/fa";
import SingleRatingStar from "./SingleRatingStar";
import delivery from "../../../../assets/courier.png";
import Swal from "sweetalert2";
import { CartCount } from "../../../../context/CartCountContext/CartCountContext";
import useAuth from "../../../../hooks/useAuth";

const SingleProduct = () => {
  const { user } = useAuth();
  const userEmail = user?.email;
  console.log(userEmail);
  const product = useLoaderData();
  console.log(product);
  const { updateCartCount } = useContext(CartCount);
  // console.log(product)
  const {
    current_price,
    discount,
    image,
    name,
    original_price,
    rating,
    star,
    quantity,
  } = product;

  const [productQuantity, setProductQuantity] = useState(quantity);

  const inQuantity = () => {
    if (productQuantity < 5) {
      setProductQuantity(productQuantity + 1);
    }
  };
  const deQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };
  // add to cart function
  const handleAddToCart = () => {
    const addedProduct = {
      ...product,
      quantity: productQuantity,
      userEmail,
    };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyExsist = cart.find((p) => p._id === addedProduct._id);
    if (alreadyExsist) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Product already in your cart.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      cart.push(addedProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Added to cart successfully!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    updateCartCount();
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white lg:flex">
          <div className="w-full lg:w-3/4 flex p-3 pb-12 single-content-box">
            <div className=" sm:w-[410px] sm:h-[340px]">
              <img
                src={image}
                className="w-[330px] h-[250px] sm:h-[280px] lg:h-[300px] xl:h-[330px] single-img"
                alt=""
              />
            </div>
            <div className="ml-5 w-full content-box">
              <div>
                <h4 className="single-product-name text-base sm:text-lg md:text-xl xl:text-2xl font-normal mb-2">
                  {name}
                </h4>
                <div className="flex items-center">
                  <SingleRatingStar className="text-lg" rating={star} />
                  <p className="ml-2 text-sm">
                    <span className="mr-1">{rating}</span>Ratings
                  </p>
                </div>
                <h5 className="text-gray-400 font-normal">
                  Brand: <Link className="text-sm">No Brand</Link>
                </h5>
              </div>
              <hr className="my-2 sm:my-3 text-gray-200" />
              <div style={{ marginLeft: "-5px" }} className="flex items-center">
                <TbCurrencyTaka
                  style={{ marginRight: "-2px" }}
                  className="orangeColor taka-icon text-2xl sm:text-3xl"
                />
                <p className="orangeColor current-price text-2xl sm:text-3xl font-normal">
                  {current_price}
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center mr-1 line-through">
                  <TbCurrencyTaka
                    style={{ marginRight: "-2px" }}
                    className="text-gray-500 text-lg"
                  />
                  <p className="text-gray-500 text-sm">{original_price}</p>
                </div>
                <span className="text-black">{discount}</span>
              </div>
              <div className="flex items-center mt-3 lg:mt-4">
                <span className="text-base text-gray-400 font-normal mr-4 sm:mr-8">
                  Quantity
                </span>
                <div className="flex">
                  <span
                    onClick={() => deQuantity(name)}
                    style={{ borderColor: "transparent" }}
                    className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 p-2.5 bg-gray-100 hover:bg-gray-300 rounded-none quantity-btn flex items-center justify-center"
                  >
                    <FaMinus className="transition-all text-gray-400 text-sm quantity-icon" />
                  </span>
                  <input
                    type="text"
                    value={productQuantity}
                    className="text-center w-10"
                  />
                  <span
                    onClick={() => inQuantity(name)}
                    style={{ borderColor: "transparent" }}
                    className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 p-2.5 bg-gray-100 hover:bg-gray-300 rounded-none quantity-btn flex items-center justify-center"
                  >
                    <FaPlus className="transition-all text-gray-400 text-sm quantity-icon" />
                  </span>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 xl:mt-8">
                <Link
                  to={`/buynow?id=${product._id}&quantity=${productQuantity}`}
                  style={{ color: "#fff" }}
                  className="buynow-btn bg-sky capitalize font-normal px-6 py-3 sm:px-10 md:px-18 lg:px-16 xl:px-20 sm:py-4 mr-2.5"
                >
                  buy now
                </Link>
                <button
                  onClick={() => handleAddToCart(product._id)}
                  className="addtocart-btn cursor-pointer text-white bg-orange capitalize font-normal px-4 py-2  sm:px-8 md:px-16 lg:px-16 xl:px-20 sm:py-3 rounded-none"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 bg-gray-100 p-4">
            <div>
              <h5 className="text-sm text-gray-600 capitalize">delivery</h5>
              <div className="flex items-center justify-between mt-3 w-fit">
                <div className="flex items-center">
                  <img src={delivery} className="w" alt="" />
                  <h4 className="text-base capitalize text-black font-normal ml-3">
                    standard delivery
                    <span className="ml-2 text-sm font-normal text-gray-400">
                      3-7 days
                    </span>
                  </h4>
                </div>
                <div className="flex items-center ml-5">
                  <TbCurrencyTaka className="text-black text-xl" />
                  <span className="text-black">55</span>
                </div>
              </div>
              <div className="flex items-center mt-3">
                <TbCoinTaka className="text-xl" />
                <h4 className="ml-3 text-base capitalize text-black font-normal">
                  case on delivery avilable
                </h4>
              </div>
            </div>
            <hr className="my-3 text-gray-300" />
            <div>
              <h5 className="text-sm text-gray-600 capitalize">service</h5>
              <div className="flex items-start mt-3">
                <img
                  src="https://i.ibb.co/BV4VvZj/pic5.png"
                  className="w mt-1"
                  alt=""
                />
                <div className="ml-3">
                  <h4 className="text-base capitalize text-black font-normal">
                    100% authentic from trusted brand
                  </h4>
                  <span className="text-xs text-gray-400 font-normal capitalize">
                    or get 2x your money back
                  </span>
                </div>
              </div>
              <div className="flex items-start mt-3">
                <img
                  src="https://i.ibb.co/fYzJYFX/pic3.png"
                  className="w mt-1"
                  alt=""
                />
                <div className="ml-3">
                  <h4 className="text-base capitalize text-black font-normal">
                    14 days free & easy return
                  </h4>
                  <span className="text-xs text-gray-400 font-normal capitalize">
                    change of mind applicable
                  </span>
                </div>
              </div>
              <div className="flex items-center mt-3">
                <img
                  src="https://i.ibb.co/HFJcxmC/shaid.png"
                  className="w"
                  alt=""
                />
                <h4 className="ml-3 text-base capitalize text-black font-normal">
                  warranty not available
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
