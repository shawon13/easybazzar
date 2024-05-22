import React, { createContext, useState } from 'react';

export const BuyContext = createContext()

const BuynowContext = ({ children }) => {
    const [buy, setBuy] = useState([]);
    const products = {
        buy,
        setBuy,
    }
    return (
        <BuyContext.Provider value={products}>
            {children}
        </BuyContext.Provider>
    );
};

export default BuynowContext;