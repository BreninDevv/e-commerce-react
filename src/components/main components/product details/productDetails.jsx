import React from "react";
import styles from "./productDetails.module.css";

const ProductDetails = () => {
  return (
    <>
      <div className={styles.titleAndText}>
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
    </>
  );
};

export default ProductDetails;
