import { useState, useContext } from "react";
import { SidebarContext } from "./Components/SidebarContext";
import { AiOutlineShoppingCart, AiOutlineArrowRight } from "react-icons/ai";
const Delivery = () => {
    const { isDelivery, setIsDelivery } = useContext(SidebarContext);
    const [order, setOrder] = useState({});
    // console.log(orders);
    // console.log(cart);
    if (JSON.parse(localStorage.getItem('shopcart')) !== null) {
        const orders = JSON.parse(localStorage.getItem('shopcart')).orders;
        return (<div className={`${isDelivery ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[3-vw] transition-all duration-300 z-20 px-4 lg:px-[35]`}>
            <div className="flex justify-between font-semibold text-green-900 py-2 border-b border-gray-300">
                <div className="flex">
                    <AiOutlineShoppingCart className="text-xl mt-1 mr-2" />
                    <span> Orders & Deliveries</span>
                </div>
                <AiOutlineArrowRight onClick={() => setIsDelivery(!isDelivery)} className="text-xl" />
            </div>
            <div>
                {orders.map((item) => {
                    // console.log(item);
                    return <div key={''} className="border rounded-md p-2 my-2">
                        <div className="flex justify-between border-b mb-2 pb-2">
                            <div>Order Name <span className="font-bold text-green-900">{item.name}</span></div>
                            <div className="font-bold text-green-700"> Total ${item.total}</div>
                            <div className="uppercase text-red-700">{item.status}</div>
                        </div>
                        <div>{item.cart.map((i) => {
                            // { console.log(i, 'p1') }
                            return <div key={i.id} className="flex ">
                                <div className="w-10 h-10"><img src={i.thumbnail} alt="" /></div>
                                <div className="grow mx-4">{i.title}</div>
                                <div>${i.price} </div>
                                <div> ({i.amount})</div>
                            </div>
                        })}</div>
                        
                    </div>
                })}
            </div>

        </div>)
    }
    else {
        return <div></div>
    }
}
export default Delivery;