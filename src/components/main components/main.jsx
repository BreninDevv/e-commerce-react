import React, { useState } from "react";
import ProductImage from "./product image/productImage";
import ProductDetails from "./product details/productDetails";
import Prices from "./prices/prices";
import Cart from "./cartt/cart";
import styles from "./main.module.css";

const Main = ({ onAddToCart }) => {
  const [count, setCount] = useState(0);

  const numberAdd = () => {
    if (count === 20) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };
  const numberRemove = () => {
    if (count === 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };
  const handleAddToCart = () => {
    if (count > 0) {
      onAddToCart(count);
      setCount(0);
    }
  };

  return (
    <>
      <main className={styles.main}>
        <ProductImage />
        <div className={styles.details}>
          <ProductDetails />
          <Prices />
          <Cart
            onAddToCartClick={handleAddToCart}
            count={count}
            numberAdd={numberAdd}
            numberRemove={numberRemove}
          />
        </div>
      </main>
    </>
  );
};

export default Main;
