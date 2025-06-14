import { createContext, useState } from 'react';

export const BuyContext = createContext(null)
const BuynowContext = ({ children }) => {
    const [buyNowProduct, setBuyNowProduct] = useState(null);
    const product = {
        buyNowProduct, setBuyNowProduct
    }
    return (
        <BuyContext.Provider value={product}>
            {children}
        </BuyContext.Provider>
    );
};

export default BuynowContext;