import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

import { AiFillStar, AiOutlineStar} from "react-icons/ai";

import { CartContext } from "./CartContext";

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const { id, title, category, thumbnail, price, rating , discountPercentage, description } = product;
    const starRating = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating > i) {
                stars.push(1);
            }
            else {
                stars.push(0);
            }
        }
        return stars
    }
    return (
        <div>
            
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-200px mx-auto flex justify-center items-center">
                        <img className="max-h-[160px] group-hover:scale-150 transition duration-700" src={thumbnail} alt={title} />
                    </div>
                    <div className="absolute top-5 right-5 rounded-full bg-green-900/40 p-2 flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transform duration-1000">
                        <Link to={`/product-detail/${id}`} className="w-12 h-12 bg-white justify-center items-center text-primary drop-shadow-xl"><BsEyeFill className="text-green-900"/></Link>
                    </div>

                </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <div className="text-xs">{category}</div>
                    <div className="text-xs">discount {discountPercentage}%</div>
                </div>
                <div className="flex justify-between my-1 text-green-900">
                    <div><Link to={`/product-detail/${id}`} className="font-bold mb-1">{title}</Link></div>
                    <div className="font-bold">${price}</div>
                </div>
                <div className="text-xs">{description.substring(0, 35) + '...'}</div>
                <div className="flex text-green-700 mt-1">
                    <div className=" flex mt-1.5 mr-1">{starRating(rating).map((star,i) => (star === 1) ? <AiFillStar key={i}/> : <AiOutlineStar key={i}/>)}</div>
                    ({rating})
                </div>
                <button className="text-xs font-semibold rounded-full px-4 py-2  mt-2 border-2 border-green-900 hover:bg-green-900 hover:text-white transform duration-500" onClick={() => addToCart(product, id)}>Add to Cart</button>
            </div>
        </div>
        // <div className='w-full h-[300px] bg-pink-200' key={product.id}>{product.title}</div>
    )
}
export default Product;

