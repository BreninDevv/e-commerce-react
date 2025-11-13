import React from "react";
import ProductImage from "./productImage";
import ProductDetails from "./productDetails";
import Prices from "./prices";
import Cart from "./cart";

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
