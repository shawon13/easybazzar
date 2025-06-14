// use local storage to manage cart data
const addToDb = name => {
    let buynowCart = getShoppingCartTwo();
    // add quantity
    const quantity = buynowCart[name];
    if (!quantity) {
        buynowCart[name] = 1;
    }
    sessionStorage.setItem('buynow-cart', JSON.stringify(buynowCart));
}

const getBuynowShoppingCart = () => {
    let buynowCart = [];
    //get the shopping cart from local storage
    const storedCart = sessionStorage.getItem('buynow-cart');
    if (storedCart) {
        buynowCart = JSON.parse(storedCart);
    }
    return buynowCart;
}

const addToDbTwo = id => {
    let shoppingCart = getShoppingCartTwo();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getShoppingCartTwo = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCartTwo();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    addToDbTwo,
    getBuynowShoppingCart,
    getShoppingCartTwo,
    removeFromDb,
    deleteShoppingCart
}
