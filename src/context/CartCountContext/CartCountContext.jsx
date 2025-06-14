import { createContext, useEffect, useState } from 'react';

export const CartCount = createContext(null);

const CartCountContext = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        const totalQuantity = cart?.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalQuantity)
    }, [])

    const updateCartCount = () => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        const totalQuantity = cart?.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalQuantity)
    }

    const cartInfo = {
        cartCount, updateCartCount
    }
    return (
        <CartCount.Provider value={cartInfo}>
            {children}
        </CartCount.Provider>
    );
};

export default CartCountContext;