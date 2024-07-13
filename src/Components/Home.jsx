import React from 'react'
import ProductCard from "../Components/ProductCard";
// import Products from "../assets/Products"
import { useEffect } from 'react'
import { useState } from 'react'



function Home() {
    const [records, setRecords] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => setRecords(data))
        .catch( err => console.log(err))
    }, [])
  return (
      <>
          {records.productData.map((item, index) => {
              return (
                  <ProductCard img={item.img}
                      name={item.name}
                      color={item.color}
                      price={item.price}
                      ite={item}
                      key={index} />
               )
           })}
      </>
  )
}

export default Home