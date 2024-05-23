import React, { createContext, useState } from 'react';

export const ProductQuantityContext = createContext()
const QuantityContext = ({ children }) => {
    const [productQuantity, setProductQuantity] = useState(1);
    const products = {
        productQuantity,
        setProductQuantity,
    }
    return (
        <ProductQuantityContext.Provider value={products}>
            {children}
        </ProductQuantityContext.Provider>
    );
};

export default QuantityContext;