import React from "react";
import ProductImage from "./product image/productImage";
import ProductDetails from "./product details/productDetails";
import Prices from "./prices/prices";
import Cart from "./cartt/cart";

const Main = () => {
  return (
    <>
      <main>
        <ProductImage />
        <ProductDetails />
        <Prices />
        <Cart />
      </main>
    </>
  );
};

export default Main;
