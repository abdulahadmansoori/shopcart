import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [isDataFetched, setIsDataFetched] = useState(false);

    const fetchProducts = async () => {
        const response = await fetch('https://dummyjson.com/products');
        // const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        // console.log(data);
        setIsDataFetched(true);
    };

    useEffect(() => {

        fetchProducts();
    }, []);

    if (!isDataFetched) {
        return <div>Loading...</div>; // or any loading indicator
    }
    
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;