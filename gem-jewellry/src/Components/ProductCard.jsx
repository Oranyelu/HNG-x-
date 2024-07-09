import React from "react";

function ProductCard() {
  return (
    <div>
      <main>
        <span>
          <img src="" alt="add to cart" />
          <img src="" alt="Favourites" />
        </span>
        <img src="" alt="product image" />
      </main>
      <article>
        {Products.map((rings) => (
          <p key={rings.id}></p>
        ))}
        <p></p>
        <div>
          <span className="color"></span>
          <span className="color"></span>
        </div>
        <p></p>
      </article>
    </div>
  );
}

export default ProductCard;
