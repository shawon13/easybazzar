import React, { createContext, useState } from 'react';

export const AddToCart = createContext()

const AddToCartContext = ({ children }) => {
    const user = { name: "shawon" }
    const [cart, setCart] = useState([])
    const products = {
        cart,
        setCart,
        user
    }
    return (
        <AddToCart.Provider value={products}>
            {children}
        </AddToCart.Provider>
    );
};

export default AddToCartContext;