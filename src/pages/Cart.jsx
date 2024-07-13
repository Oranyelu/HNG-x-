import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Cart() {
  const {
    isEmpty,
    totalUniqeItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <>
        <Header />
        <h1>Your cart is empty</h1>
        <Footer />
      </>
    );
  return (
    <div>
      <Header />
      <section>
        <main>
          Cart({totalUniqeItems}) total Items: ({totalItems})
          <table>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
        <div>
          <h2>Order Summary</h2>
          <p>Subtotal: {cartTotal}</p>
          <button onClick={() =>emptyCart()}>Clear cart</button>
          <button>Continue to Checkout</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
