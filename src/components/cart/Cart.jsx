import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/aib.webp";
import burger2 from "../../assets/mlb.webp";
import burger3 from "../../assets/prob.webp";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState({
    1: 0, // Cheese Burger
    2: 0, // Veg Cheese Burger
    3: 0, // Cheese Burger with French Fries
  });

  const increment = (itemId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: prevItems[itemId] + 1,
    }));
  };

  const decrement = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prevItems) => ({
        ...prevItems,
        [itemId]: prevItems[itemId] - 1,
      }));
    }
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Study Material for  AI "}
          img={burger1}
          value={cartItems[1]}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Study Material for ML"}
          img={burger2}
          value={cartItems[2]}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Study Material for Prompt Engineer"}
          img={burger3}
          value={cartItems[3]}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div></div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/Shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
