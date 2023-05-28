import React, { useContext } from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

import { SidebarContext } from "./Components/SidebarContext";
import { CartContext } from "./Components/CartContext";

const PlaceOrder = () => {
    const { isPlaceOrder, setIsPlaceOrder } = useContext(SidebarContext);
    const { address, setAddress, cart, setCart, total } = useContext(CartContext);

    const placeOrderHandler = () => {
        const order = { ...address, cart , 'status':'pending', total }
        console.log('place order', order);
        if (localStorage.getItem('shopcart')) {
            let shopcart = JSON.parse(localStorage.getItem('shopcart'));
            console.log(shopcart, 'local');
            shopcart.orders.push(order);
            localStorage.setItem('shopcart', JSON.stringify(shopcart));

        } else {
            localStorage.setItem('shopcart', JSON.stringify({ 'orders': [order] }));
        }
        setAddress([]);
        setCart([]);
        setIsPlaceOrder(!isPlaceOrder);

    }

    return (<div className={`${isPlaceOrder ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[3-vw] transition-all duration-300 z-20 px-4 lg:px-[35]`}>
        <div className="flex justify-between font-semibold text-green-900 py-2 border-b border-gray-300">
            <div className="flex">
                <AiOutlineShoppingCart className="text-xl mt-1 mr-2" />
                <span> Order Summary</span>
            </div>
            <RxCross2 onClick={() => setIsPlaceOrder(!isPlaceOrder)} className="text-xl" />
        </div>
        <div>
            <h1 className="font-bold text-xs mt-4 text-green-900 border-b border-gray-200">Review Items And Shipping</h1>
            <div className="overflow-auto max-h-[300px]">
                {cart.map((item) => {
                    return (
                        <div key={item.id} className="flex my-2 border-b border-gray-200">
                            <div className="w-12 h-12"><img src={item.thumbnail} alt={item.title} /></div>
                            <div className="grow mx-4">({item.amount}) {item.title} <span className="text-xs"> ${item.price}</span></div>
                            <div className="mx-3"></div>
                            <div className="mx-3 my-2">${item.price * item.amount}/-</div>
                        </div>
                    )
                })}

            </div>
            <div>
                <h1 className="font-bold text-xs mt-4 text-green-900 border-b border-gray-200"> Delivery Information</h1>
                <div className="mt-2 text-sm">
                    <div className="my-1"><span>Name </span> <span className="text-gray-400 ml-3">{address.name}</span></div>
                    <div className="my-1"><span>email </span> <span className="text-gray-400 ml-3">{address.email}</span></div>
                    <div className="my-1"><span>mobile </span> <span className="text-gray-400 ml-3">{address.mobile}</span></div>
                    <div className="my-1"><span>address </span> <span className="text-gray-400 ml-3">{address.address}</span></div>
                    <div className="my-1"><span>postalCode </span> <span className="text-gray-400 ml-3">{address.postalCode}</span></div>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-xs mt-4 text-green-900 border-b border-gray-200"> Payment Information</h1>
                <div>
                    <div className="my-1"><span>Method </span> <span className="font-bold ml-3 text-green-700">Cash On Delivery <TbTruckDelivery className="inline text-xl" /></span></div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 w-full left-0 bg-white">
            <div className="px-4 py-2 border-t border-gray-300 ">
                <div className="flex justify-between text-xl font-bold text-green-900 uppercase ">
                    <span>Total: </span>
                    <span>${parseFloat(total).toFixed(2)}/-</span>
                </div>
            </div>
            <div>
                <button type='submit' className="w-full bg-green-900 text-white py-2 text-center mx-auto" onClick={placeOrderHandler}> Place Order </button>
            </div>
        </div>
    </div>)
    // return <div>sidebar</div>
}
export default PlaceOrder;