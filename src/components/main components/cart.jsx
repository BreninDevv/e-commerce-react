import React from "react";
import IconMinus from "../../assets/icon-minus.svg";
import IconPlus from "../../assets/icon-plus.svg";
import IconCart from "../../assets/icon-cart.svg";

const Cart = () => {
  return (
    <>
      <div className="cartContainer">
        <div className="cartBtns">
          <button>
            <img src={IconMinus} alt="icon-minus" />
          </button>
          <span>0</span>
          <button>
            <img src={IconPlus} alt="icon-plus" />
          </button>
        </div>
      </div>
      <div className="addToCartContainer">
        <div className="btnAddToCart">
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
