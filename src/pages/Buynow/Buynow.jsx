import { useContext, useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import AuthContext from "../../Provider/AuthContext";

const Buynow = () => {
  // single buynow product
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const qty = parseInt(params.get("quantity"));
    setProductId(id);
    setQuantity(qty);
  }, []);
  const [products] = useProducts();
  const product = products.find((p) => p._id === productId);
  console.log("product", product);

  //cart product
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    const checkoutProduct = JSON.parse(localStorage.getItem("checkoutItems"));
    setCartProduct(checkoutProduct);
  }, []);
  console.log(cartProduct);
  const cartQuantity = cartProduct?.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  //item total
  const itemTotal = product
    ? product.current_price * quantity
    : cartProduct?.reduce(
        (sum, item) => sum + item.current_price * item.quantity,
        0
      );

  //  delivery
  let deliveryCharge = 0;
  if (itemTotal >= 3000) {
    deliveryCharge = 300;
  } else if (itemTotal >= 1000) {
    deliveryCharge = 200;
  } else if (itemTotal >= 300) {
    deliveryCharge = 120;
  } else if (itemTotal > 1) {
    deliveryCharge = 55;
  } else {
    deliveryCharge;
  }
  //total
  const total = itemTotal + deliveryCharge;

  //loading
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <div className="text-center py-40">Loading...</div>;
  }
  return (
    <section className="py-6">
      <div className="container px-4 mx-auto">
        <div className="flex">
          <div style={{ width: "70%" }} className="">
            <div className="bg-white px-5 py-6 shadow-md rounded-md mr-5 mb-5">
              {/* buynow */}
              {product ? (
                <div className="flex items-center justify-between">
                  <div className="flex w-7/12">
                    <img src={product?.image} className="w-16 h-16" alt="" />
                    <div className="ml-3 pr-3">
                      <h4 className="text-sm">{product?.name}</h4>
                      <span className="text-sm text-gray-500">No Brand</span>
                    </div>
                  </div>
                  <div className="text-center" style={{ width: "10%" }}>
                    <span className="text-sm">Qty:{quantity}</span>
                  </div>
                  <div className="flex justify-end items-center w-1/4">
                    <div
                      style={{ backgroundColor: "#F5F5F5" }}
                      className="flex justify-between items-center px-1"
                    >
                      <div className="flex justify-between items-center text-xs line-through">
                        <TbCurrencyTaka className="text-base" />
                        <span>{product?.original_price}</span>
                      </div>
                      <span className="ml-2 text-xs">{product?.discount}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm ml-2">
                      <TbCurrencyTaka className="text-base" />
                      <span>{product?.current_price}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {cartProduct?.map((p) => (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="flex w-7/12">
                          <img src={p.image} className="w-16 h-16" alt="" />
                          <div className="ml-3 pr-3">
                            <h4 className="text-sm">{p.name}</h4>
                            <span className="text-sm text-gray-500">
                              No Brand
                            </span>
                          </div>
                        </div>
                        <div className="text-center" style={{ width: "10%" }}>
                          <span className="text-sm">Qty:{p.quantity}</span>
                        </div>
                        <div className="flex justify-end items-center w-1/4">
                          <div
                            style={{ backgroundColor: "#F5F5F5" }}
                            className="flex justify-between items-center px-1"
                          >
                            <div className="flex justify-between items-center text-xs line-through">
                              <TbCurrencyTaka className="text-base" />
                              <span>{p.original_price}</span>
                            </div>
                            <span className="ml-2 text-xs">{p.discount}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm ml-2">
                            <TbCurrencyTaka className="text-base" />
                            <span>{p.current_price}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
          <div
            style={{ width: "30%" }}
            className=" bg-white px-5 py-6 shadow-md rounded-md h-96"
          >
            <h4>Discount and Payment</h4>
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    className="w"
                    src="https://i.ibb.co/r3jpY5V/promocode.png"
                    alt=""
                  />
                  <h2 className="ml-2">Promo code</h2>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-gray-400 font-normal capitalize">
                    Enter code
                  </p>
                  <MdKeyboardArrowRight className="text-2xl" />
                </div>
              </div>
              <div className="flex items-center mt-3.5">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full border border-r-0 py-2 px-2.5 outline-none border-gray-200"
                  placeholder="Enter Code"
                />
                <button className="bg-transparent border border-gray-200 border-l-0 rounded-none hover:border-gray-200 py-2 px-2.5">
                  Confirm
                </button>
              </div>
            </div>
            <hr className="mt-4 mb-2 text-gray-300" />
            <div>
              <h4 className="text-xl font-medium text-black capitalize">
                order summary
              </h4>
              <div className="flex items-center justify-between my-2">
                <h4 className="text-base font-normal text-black capitalize">
                  items Total ({product ? quantity : cartQuantity} items)
                </h4>
                <div className="flex items-center justify-between">
                  <TbCurrencyTaka className="text-black text-xl" />
                  <span>{itemTotal}</span>
                </div>
              </div>
              <div className="flex items-center justify-between my-2">
                <h4 className="text-base font-normal text-black capitalize">
                  delivery fee
                </h4>
                <div className="flex items-center justify-between">
                  <TbCurrencyTaka className="text-black text-xl" />
                  <span id="delivery-charge">{deliveryCharge}</span>
                </div>
              </div>
              <div className="flex items-center justify-between my-2">
                <h4 className="text-base font-normal text-black capitalize">
                  total payment
                </h4>
                <div className="flex items-center justify-between">
                  <TbCurrencyTaka className="text-black text-xl" />
                  <span>{total}</span>
                </div>
              </div>
              <div className="text-center mt-5">
                <Link
                  style={{ color: "#fff" }}
                  className="bg-orange capitalize font-normal block w-full py-2 text-sm"
                >
                  place order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buynow;
