import React, { createContext, useState } from 'react';

export const BuyContext = createContext()

const BuynowContext = ({ children }) => {
    const [buy, setBuy] = useState([]);
    const [productQuantity, setProductQuantity] = useState(1);
    const products = {
        buy,
        setBuy,
        productQuantity,
        setProductQuantity,
    }
    return (
        <BuyContext.Provider value={products}>
            {children}
        </BuyContext.Provider>
    );
};

export default BuynowContext;