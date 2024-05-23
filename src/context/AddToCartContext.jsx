import React, { createContext, useState } from 'react';

export const AddToCart = createContext()

const AddToCartContext = ({ children }) => {
    const [cart, setCart] = useState([])
    const products = {
        cart,
        setCart,
    }
    return (
        <AddToCart.Provider value={products}>
            {children}
        </AddToCart.Provider>
    );
};

export default AddToCartContext;