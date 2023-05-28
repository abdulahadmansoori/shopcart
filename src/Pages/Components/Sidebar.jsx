import React, { useContext } from "react";
import { Link, useNavigate, Router } from "react-router-dom";

import { AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import CartItem from './CartItem';
import { SidebarContext } from "./SidebarContext";
import { CartContext } from "./CartContext";

const Sidebar = () => {
    // const navigate = useNavigate();
    const { isOpen, setIsOpen, isCheckOut, setIsCheckOut } = useContext(SidebarContext);
    const { cart, clearCart, removeFromCart, total, increaseAmount, decreaseAmount } = useContext(CartContext);
    // console.log(cart);
    return (<div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[3-vw] transition-all duration-300 z-20 px-4 lg:px-[35]`}>
        <div className="flex justify-between font-semibold text-green-900 py-2 border-b border-gray-300">
            <div className="flex">
                <AiOutlineShoppingCart className="text-xl mt-1 mr-2" />
                <span> Shoping Cart</span>
            </div>
            <AiOutlineArrowRight onClick={() => setIsOpen(!isOpen)} className="text-xl" />
        </div>
        <div className="overscroll-auto">{cart.map(item => {
            return (
                <div key={item.id} className="flex my-1 border-b border-gray-200 py-1 justify-center">
                    <div onClick={() => removeFromCart(item.id)} className="my-5 mx-4 border p-1 text-green-900 hover:bg-green-100"><RxCross2 /></div>
                    <div className="w-16 h-16 border py-1"><img src={item.thumbnail} alt={item.title} className="align-center items-center py-1" /></div>
                    <div className="grow mx-3">
                        <div className="font-semibold text-green-900">{item.title}</div>
                        <div className="flex">
                            <div className="flex mr-2">
                                <div onClick={() => decreaseAmount(item.id)}><HiOutlineMinusCircle className="mt-1 cursor-pointer hover:text-green-800 mx-1" /></div>
                                <div>{item.amount}</div>
                                <div onClick={() => increaseAmount(item.id)}><HiOutlinePlusCircle className="mt-1 cursor-pointer hover:text-green-800 mx-1" /></div>
                            </div>
                            <div className="text-xs mt-1 text-green-900">${item.price}/-</div>
                        </div>
                    </div>
                    <div className="font-bold text-green-900">${item.price * item.amount}/-</div>

                </div>)
        })}
        </div>
        <div className="absolute bottom-0 w-full left-0 bg-white">
            <div className="px-4 py-2 border-t border-gray-300 ">
                <div className="flex justify-between text-xl font-bold text-green-900 uppercase ">
                    <span>Total: </span>
                    <span>${parseFloat(total).toFixed(2)}/-</span>
                </div>
            </div>
            <div>
                {/* <Router> */}
                    <button className="w-full bg-green-900 text-white py-2 text-center mx-auto" disabled={(cart.length > 0) ? false : true} onClick={() => {
                        setIsOpen(!isOpen);
                        setIsCheckOut(!isCheckOut);
                        console.log('checkout');
                    }}> Check Out </button> 
                {/* </Router> */}
            </div>
        </div>
    </div>)
    // return <div>sidebar</div>
}
export default Sidebar;