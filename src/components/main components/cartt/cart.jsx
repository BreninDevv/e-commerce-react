import React, { useState } from "react";
import IconMinus from "../../../assets/icon-minus.svg";
import IconPlus from "../../../assets/icon-plus.svg";
import IconCart from "../../../assets/icon-cart.svg";
import styles from "./cart.module.css";

const Cart = () => {
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

  return (
    <>
      <div className={styles.cartContainer}>
        <div className={styles.cartBtns}>
          <button onClick={() => numberRemove()}>
            <img src={IconMinus} alt="icon-minus" />
          </button>
          <span>{count}</span>
          <button onClick={() => numberAdd()}>
            <img src={IconPlus} alt="icon-plus" />
          </button>
        </div>
      </div>
      <div className={styles.addToCartContainer}>
        <div className={styles.btnAddToCart}>
          <div>
            <img src={IconCart} alt="icon-cart" />
          </div>
          <div>
            <span>Add to cart</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
