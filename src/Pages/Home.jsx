import React, { useContext } from 'react';
import { ProductContext } from './Components/ProductContext';
import Product from './Components/Product';
const Home = () => {
    const { products } = useContext(ProductContext);
    // console.log(products);
    // const filteredProducts = products.filter(item=>{
    //     return item.category === "smartphones"
    // });
    // console.log(filteredProducts)
    return (

        <div>
            <section className='py-1'>
                <div className="container mx-auto">
                    <div className=' bg-orange-100 xl:h-[400px] lg:h-[350px] md:h-[270px] sm:h-[220px] rounded-md text-green-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                        <div className='xl:mt-[125px] lg:mt-[50px] mx-14 md:my-[40px] sm:my-[50px] my-6'>
                            <p className='font-bold lg:text-5xl md:text-3xl sm:text-lg '>Grab Upto 50% Off On  Selected Headphone</p>
                            <button className='bg-green-900 text-white rounded-full lg:px-8 lg:py-4 lg:text-lg lg:mt-8 md:my-4 md:p-3 md:text-sm sm:px-3 sm:py-2 sm:text-sm sm:mt-5 text-xs px-3 py-2 mt-3'>Buy Now</button>
                        </div>
                        <div className="bg-[url('../src/assets/girl-image.png')] bg-no-repeat bg-cover bg-top">
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-8'>
                <div className="container mx-auto">
                <h1 className='text-2xl font-bold text-green-900 py-4'>Products</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
                        {products.map(product => {
                            return <Product product={product} key={product.id} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;


// https://www.youtube.com/watch?v=lGnuiAZCjuM
// https://dribbble.com/shots/19614098-Shopcart-E-Commerce-Product-Page