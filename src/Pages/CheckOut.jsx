import React, { useContext } from "react";
import { Link, useNavigate, Router } from "react-router-dom";
import { useForm } from "react-hook-form";

import { AiOutlineArrowRight, AiOutlineShoppingCart } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import { SidebarContext } from "./Components/SidebarContext";
import { CartContext } from "./Components/CartContext";

const CheckOut = () => {
    const { register, handleSubmit } = useForm();
    const { isCheckOut, setIsCheckOut, isPlaceOrder, setIsPlaceOrder} = useContext(SidebarContext);
    const { address, setAddress } = useContext(CartContext);

    const handleRegistration = (data) => {
        setAddress(data);
        setIsCheckOut(!isCheckOut);
        setIsPlaceOrder(!isPlaceOrder);
        // console.log(data)
    };

    return (<div className={`${isCheckOut ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[3-vw] transition-all duration-300 z-20 px-4 lg:px-[35]`}>
        <div className="flex justify-between font-semibold text-green-900 py-2 border-b border-gray-300">
            <div className="flex">
                <AiOutlineShoppingCart className="text-xl mt-1 mr-2" />
                <span> Shiping Information</span>
            </div>
            <AiOutlineArrowRight onClick={() => setIsCheckOut(!isCheckOut)} className="text-xl" />
        </div>
        <form action="" onSubmit={handleSubmit(handleRegistration)}>
            <div className="">
                <label htmlFor="name" className="text-xs font-semibold text-green-900">Order Title </label>
                <input type="text" name="name" placeholder="Abdul Ahad" className="w-full" required {...register('name')}/>
                <label htmlFor="mobile" className="text-xs font-semibold text-green-900">Mobile </label>
                <input type="number" name="mobile" placeholder="033224477558" className="w-full" required {...register('mobile')}/>
                <label htmlFor="email" className="text-xs font-semibold text-green-900">email </label>
                <input type="email" name="email" placeholder="abc@abc.com" className="w-full" required {...register('email')}/>
                <label htmlFor="postalCode" className="text-xs font-semibold text-green-900">City </label>
                <input type="text" name="city" placeholder="karachi" className="w-full" required {...register('postalCode')}/>
                <label htmlFor="address" className="text-xs font-semibold text-green-900">Address</label>
                <textarea rows={3} type="text" name="address" placeholder="f-17/A, abc Appartment, near abc venue" className="w-full" required {...register('address')}/>
            </div>
            <div className="absolute bottom-0 w-full left-0 bg-white">
                <div>
                    {/* <Router> */}
                    <button type='submit' className="w-full bg-green-900 text-white py-2 text-center mx-auto" onClick={() => console.log('place order', address)}> Next </button>
                    {/* </Router> */}
                </div>
            </div>
        </form>
    </div>)
    // return <div>sidebar</div>
}
export default CheckOut;