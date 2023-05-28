import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './Components/CartContext';
import { ProductContext } from './Components/ProductContext';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductDetail = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const product = products.find((item) => {
        return item.id === parseInt(id);
    });
    const [thumbnail,setThumbnail] =useState(product.thumbnail);
    console.log(product, id);
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
    return (<>
        <div className='container mx-auto'>
            <span className='font-bold text-green-700'>ProductDetail</span> 
            <div className='grid lx:grid-cols-2 lg:grid-cols-2 md:drif-cols-1 gap-x-6'>
                <div>
                    <div className=''>
                        <img src={thumbnail} alt={product.title} className='max-h-[360px] m-auto p-10' />
                    </div>
                    <div className='mt-5 flex'>
                        {product.images.map(image => {
                            return <div key={image} className='p-2 w-20 h-15 border m-auto' onClick={()=>setThumbnail(image)}><img src={image} alt=""/></div>
                        })}
                    </div>
                </div>
                <div className='md:mt-5'>
                    <h1 className='my-1'>{product.brand}</h1>
                    <h1 className='text-4xl font-bold text-green-900'>{product.title}</h1>
                    <div className='mt-5'><p> {product.description} </p></div>
                    <div className='flex text-green-600'>
                        <div className=" flex mr-1 text-lg mt-6">{starRating(product.rating).map((star, i) => (star === 1) ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />)}</div>
                        <div className='mt-5'>({product.rating})</div>
                    </div>


                    <div className=''>Category: {product.category}</div>
                    <div className='text-xl mt-4'>Actual Price ${parseFloat((product.price/(100-product.discountPercentage))*100).toFixed(2)}</div>
                    <div className='text-xl'>Discount {product.discountPercentage}% OFF</div>
                    <div className='text-2xl my-3 font-semibold text-green-600'>After Discount Price <span className='font-bold'>${product.price}/-</span> Only</div>
                    <div className=''>In Stock ({product.stock})</div>
                    <div className='flex font-bold'>
                        <button className='border-2 border-green-600 text-green-600 w-full my-7 p-2 rounded-full mx-5' onClick={() => addToCart(product, product.id)}>Buy Now</button>
                        <button className='bg-green-900 text-white w-full my-7 p-2 rounded-full mx-5' onClick={() => addToCart(product, product.id)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default ProductDetail;