import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";
const CartItem=({item})=>{
const {id,title,image,price,amount}= item;
const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
return(
    <div className="flex">
        <div className="w-full min-h-[150px] flex items-center gap-x-4">
            <Link to={`./product/${id}`}>
                <img className="max-w-[80px]" src={image} alt={title} />
            </Link>
        </div>
        <div>
            <div>
                <Link to={`./product/${id}`}>{title}</Link>
                <div onClick={()=>removeFromCart(id)}>remove</div>
            </div>
            <div>
                <div onClick={()=>decreaseAmount(id)}>-</div>
                <div>Quantity</div>
                <div onClick={()=>increaseAmount(id)}>+</div>
                <div>{amount}</div>
                <div>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
            </div>
        </div>
    </div>
)
}
export default CartItem;