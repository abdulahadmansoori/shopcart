import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { SidebarContext } from "./SidebarContext";
import { CartContext } from "./CartContext";
import Sidebar from "./Sidebar";

import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import CheckOut from "../CheckOut";
import PlaceOrder from "../PlaceOrder";
import Delivery from "../Delivery";

const Header = () => {
    const deliveryHandler = () => { setIsDelivery(!isDelivery); console.log('delivery') };
    const navbar = [
        {
            path: '/',
            title: 'Categories',
            handler: ('')
        },
        {
            path: '/',
            title: 'Deals',
            handler: ('')
        },
        {
            path: '/',
            title: "What's New",
            handler: ('')
        },
        {
            path: '/',
            title: 'Delivery',
            handler: (deliveryHandler)
        }
    ]
    const [nav, setNav] = useState(false);
    const { isOpen, setIsOpen, isDelivery, setIsDelivery } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);
    return (<>
        <div className="bg-green-900 py-2 text-xs lg:block">
            <div className="lg:flex flex text-white container mx-auto justify-between">
                <div className="text-center flex">
                    <BsTelephone className="mt-1" />
                    <span className="px-1"> +923322256274</span>
                </div>
                <div className="lg:block sm:hidden hidden">
                    <span>Get 50% 0ff on Selected Items | Shop Now</span>
                </div>
                <div className="flex">
                    <select name="language" id="" className="border-none bg-green-900">
                        <option value="english">Eng</option>
                        <option value="english">Eng</option>
                        <option value="english">Eng</option>
                    </select>
                    <select name="location" id="" className="border-none bg-green-900">
                        <option value="english">Location</option>
                        <option value="english">Location</option>
                        <option value="english">Location</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="container mx-auto py-5 lg:flex md:flex sm:flex flex justify-between">
            <div className="font-bold text-3xl text-green-900 sm:px-2">
                {/* <Link to={`/`}>Shopcart</Link> */}
                Shopcart
            </div>
            <div onClick={() => setNav(!nav)} className={`font-bold text-3xl text-green-900 lg:hidden px-4`}>
                {(nav) ? <RxCross2 /> : <GoThreeBars />}
            </div>
            {/* <div className="lg:flex lg:items-center z-[+1] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto"> */}
            <div className={`lg:flex md:container sm:container container md:mx-auto sm:mx-auto mx-auto md:bg-white sm:bg-white bg-white md:top-[110px] sm:top-[110px] top-[110px] md:w-full sm:w-full w-full ${(nav) ? 'md:absolute sm:absolute absolute' : 'md:hidden sm:hidden hidden'}`}>
                <div className="lg:flex justify-center py-2 xl:ml-[220px] lg:ml-[30px]">
                    {navbar.map((item) => <div key={item.title} onClick={item.handler} className="px-5 xl:text-lg lg:my-0 md:my-3 md:text-sm sm:text-sm sm:my-2 font-semibold cursor-pointer hover:text-green-600 transition duration-300">{item.title}</div>)}
                </div>
                <div className="py-2 bg-slate-100 rounded-full ">
                    <form action="" className="sm:flex flex">
                        <input type="text" placeholder="Search Product" className=" bg-white/0 mx-2 w-full" />
                        <button className="px-2 text-xl"><AiOutlineSearch /></button>
                    </form>
                </div>
                <div className="flex my-0 sm:my-2">
                    <div className="flex mx-4">
                        <FiUser className=" text-2xl" /> <span className=" mx-2 font-semibold">Account</span>
                    </div>
                    <div onClick={() => setIsOpen(!isOpen)} className="flex ml-4 cursor-pointer">
                        <span className="absolute rounded-full bg-green-900 text-white text-[8px] py-[3px] px-[6px] ml-16 mt-4">{itemAmount}</span>
                        <TbShoppingCartPlus className="text-2xl" /> <span className=" mx-2 font-semibold">Cart</span>
                    </div>
                </div>
            </div>

        </div>

        {/* <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer"> */}
        <div className="cursor-pointer">
            <Sidebar />
            <CheckOut />
            <PlaceOrder />
            <Delivery />
        </div>

    </>)
}
export default Header;
