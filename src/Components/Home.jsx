import React, { useEffect, useState } from 'react';
import ProductCard from "../Components/ProductCard";

function Home() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setRecords(data.products)) // Access the products array within the data object
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            {records.map((item, index) => (
                <ProductCard 
                    img={item.thumbnail} // Adjusted according to actual property names from the API
                    name={item.title} // Adjusted according to actual property names from the API
                    color={item.color} // Adjust if necessary, API might not provide this
                    price={item.price}
                    item={item}
                    key={index} 
                />
            ))}
        </>
    );
}

export default Home;
