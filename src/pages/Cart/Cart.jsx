import { useContext, useEffect, useState } from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { CartCount } from '../../context/CartCountContext/CartCountContext';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    console.log(cartItems)
    const { updateCartCount } = useContext(CartCount);
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart)
    }, [])


    // Quantity
    const totalQuantity = cartItems.reduce((sum, item) => {
        return sum + item.quantity;
    }, 0)



    //Product Quntity
    const updateQuantityInCart = (productId, newQuantity) => {
        const updateCart = cartItems.map(item => item._id === productId ? { ...item, quantity: newQuantity } : item);
        setCartItems(updateCart);
        localStorage.setItem('cart', JSON.stringify(updateCart))
    }
    const inQuantity = (id) => {
        const item = cartItems.find(p => p._id === id);
        if (item.quantity < 5) {
            updateQuantityInCart(id, item.quantity + 1)
        }
    }
    const deQuantity = (id) => {
        const item = cartItems.find(p => p._id === id);
        if (item.quantity > 1) {
            updateQuantityInCart(id, item.quantity - 1)
        }
    }

    // product delete in cart
    const handleDelete = (id) => {
        Swal.fire({
            title: "Remove from cart",
            text: "Items will be removed from cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const updateCart = cartItems.filter(p => p._id !== id);
                setCartItems(updateCart);
                localStorage.setItem('cart', JSON.stringify(updateCart))

                Swal.fire({
                    title: "Deleted!",
                    text: "Your product has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    // single product and multipule product selected
    const [selectedItems, setSelectedItems] = useState([]);
    console.log(selectedItems)
    const handleItemSelect = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(itemId => itemId !== id))
        }
        else {
            setSelectedItems([...selectedItems, id])
        }
    }

    const isAllSelected = cartItems.length > 0 && selectedItems.length === cartItems.length;
    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedItems([])
        }
        else {
            const allIds = cartItems.map(item => item._id)
            setSelectedItems(allIds)
        }
    }
    //select item delete
    const handleSelectItemDelete = () => {
        if (selectedItems.length === 0) {
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "No items selected! Please select at least one item.",
                showConfirmButton: false,
                timer: 1200
            });
            return;
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const updateCart = cartItems.filter(item => !selectedItems.includes(item._id));
                setCartItems(updateCart);
                localStorage.setItem('cart', JSON.stringify(updateCart));
                setSelectedItems([]);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your product has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    const subTotal = cartItems.filter(item => selectedItems.includes(item._id)).reduce((sum, item) => sum + (item.current_price * item.quantity), 0);
    const itemsQuantity = cartItems.filter(item => selectedItems.includes(item._id)).reduce((sum, item) => sum + item.quantity, 0);
    // delivery
    let deliveryCharge = 0;
    if (subTotal >= 3000) {
        deliveryCharge = 300
    }
    else if (subTotal >= 1000) {
        deliveryCharge = 200
    }
    else if (subTotal >= 300) {
        deliveryCharge = 120
    }
    else if (subTotal > 1) {
        deliveryCharge = 55
    }
    else {
        deliveryCharge
    }
    //Total
    const total = subTotal + deliveryCharge;
    updateCartCount()

    // handle check out
    const handleCheckOut = () => {
        const selectedProducts = cartItems.filter(item => selectedItems.includes(item._id))
        localStorage.setItem('checkoutItems', JSON.stringify(selectedProducts))
    }

    return (
        <>

            <section className='py-6'>
                <div className="container px-4 mx-auto">
                    {cartItems.length === 0 ?
                        <div className=' w-full text-center py-50'>
                            <span className='mb-10 text-base text-gray-500 block'>There are no items in this cart</span>
                            <Link to='/' className='px-8 py-4 border border-orange-400 uppercase orangeColor' style={{ fontWeight: 300 }}>continue shopping</Link>
                        </div>
                        :
                        <div className='flex'>
                            <div style={{ width: '70%' }}>
                                <div className='bg-white px-5 py-2.5 shadow-sm rounded-sm mr-5 mb-3 flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <input type="checkbox" checked={isAllSelected} onChange={handleSelectAll} className="checkbox checkbox-sm rounded-sm mr-3" />
                                        <label className='text-sm uppercase'>Select All ({totalQuantity} item(s))</label>
                                    </div>
                                    <span onClick={handleSelectItemDelete} className='flex hover:text-orange-600 cursor-pointer translate-0.5'>
                                        <RiDeleteBinLine className='text-xl mr-1' />
                                        <label className='text-sm uppercase cursor-pointer'>delete</label>
                                    </span>
                                </div>
                                {
                                    cartItems.map(cp => {
                                        return <>
                                            <div className='bg-white px-5 py-6 shadow-md rounded-md mr-5 mb-5 flex items-center'>
                                                <div className='w-[5%]'>
                                                    <input type="checkbox" checked={selectedItems.includes(cp._id)} onChange={() => handleItemSelect(cp._id)} className="checkbox checkbox-sm mr-3 rounded-sm" />
                                                </div>
                                                <div className='flex items-center justify-between w-3/5'>
                                                    <div className='flex'>
                                                        <img src={cp.image} className='w-16 h-16' alt="" />
                                                        <div className='ml-3 mr-3'>
                                                            <h4 className='text-sm'>{cp.name}</h4>
                                                            <span className='text-sm text-gray-500'>No Brand</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-1/6'>
                                                    <div className='flex items-center justify-center text-xl orangeColor'>
                                                        <TbCurrencyTaka className='text-xl' />
                                                        <span>{cp.current_price}</span>
                                                    </div>
                                                    <div className='flex items-center justify-center text-xs line-through'>
                                                        <TbCurrencyTaka className='text-base' />
                                                        <span>{cp.original_price}</span>
                                                    </div>
                                                    <span className='ml-2 text-xs text-center w-full block'>{cp.discount}</span>
                                                </div>
                                                <div className='flex justify-center items-center w-1/5'>
                                                    <span onClick={() => deQuantity(cp._id)} style={{ borderColor: 'transparent' }} className="cursor-pointer w-10 h-10 p-2.5 bg-gray-100 hover:bg-gray-300 rounded-none quantity-btn flex items-center justify-center">
                                                        <FaMinus className='transition-all text-gray-400 text-sm quantity-icon' />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value={cp.quantity}
                                                        className="text-center w-10"
                                                    />
                                                    <span onClick={() => inQuantity(cp._id)} style={{ borderColor: 'transparent' }} className="cursor-pointer w-10 h-10 p-2.5 bg-gray-100 hover:bg-gray-300 rounded-none quantity-btn flex items-center justify-center">
                                                        <FaPlus className='transition-all text-gray-400 text-sm quantity-icon' />
                                                    </span>
                                                </div>
                                                <div style={{ width: '5%' }} className='flex justify-end'>
                                                    <span onClick={() => handleDelete(cp._id)} className='cursor-pointer bg-orange-100 rounded-full w-8 h-8 flex justify-center items-center'>
                                                        <RiDeleteBinLine className='text-base orangeColor' />
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    })
                                }
                            </div>
                            <div style={{ width: '30%', height: '230px' }} className=' bg-white px-5 py-6 shadow-md rounded-md'>
                                <div>
                                    <h4 className='text-xl font-medium text-black capitalize'>order summary</h4>
                                    <div className='flex items-center justify-between my-2'>
                                        <h4 className='text-base font-normal text-black capitalize'>Subtotal ({itemsQuantity} items)</h4>
                                        <div className='flex items-center justify-between'>
                                            <TbCurrencyTaka className='text-black text-xl' />
                                            <span>{subTotal}</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between my-2'>
                                        <h4 className='text-base font-normal text-black capitalize'>delivery fee</h4>
                                        <div className='flex items-center justify-between'>
                                            <TbCurrencyTaka className='text-black text-xl' />
                                            <span id='delivery-charge'>{deliveryCharge}</span>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between my-2'>
                                        <h4 className='text-base font-normal text-black capitalize'>total</h4>
                                        <div className='flex items-center justify-between orangeColor'>
                                            <TbCurrencyTaka className='text-black text-xl orangeColor' />
                                            <span>{total}</span>
                                        </div>
                                    </div>
                                    <div className='text-center mt-4'>
                                        <Link to='/buynow' onClick={handleCheckOut} style={{ color: '#fff' }} className=' bg-orange uppercase font-normal block w-full py-2 text-sm'>proceed to checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    );
};

export default Cart;