import React from 'react'
import ProductCard from "../Components/ProductCard";
import Products from "../assets/Products"

function Home() {
  return (
      <>
          {Products.productData.map((item, index) => {
              return (
                  <ProductCard img={item.img} name={item.name} color={item.color} price={item.price} key={index} />
               )
           })}
      </>
  )
}

export default Home