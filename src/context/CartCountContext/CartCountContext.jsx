import { createContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

export const CartCount = createContext(null);

const CartCountContext = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const { user, loading } = useAuth();

  const calculateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (user?.email) {
      const userCart = cart?.filter((item) => item.userEmail === user.email);
      console.log("user cart", userCart);
      const totalQuantity = userCart?.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      setCartCount(totalQuantity);
      console.log(totalQuantity);
    } else {
      setCartCount(0);
    }
  };

  const updateCartCount = () => {
    calculateCartCount();
  };

  useEffect(() => {
    if (loading) {
      calculateCartCount();
    }
  }, [user, loading]);

  const cartInfo = {
    cartCount,
    updateCartCount,
  };
  return <CartCount.Provider value={cartInfo}>{children}</CartCount.Provider>;
};

export default CartCountContext;
