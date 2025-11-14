import React from "react";
import styles from "./prices.module.css";

const Prices = () => {
  return (
    <>
      <div className={styles.prices}>
        <div className={styles.priceAndPromotion}>
          <span className={styles.price125}>$125.00</span>
          <div className={styles.promotion50}>
            <span>50%</span>
          </div>
        </div>
        <span className={styles.discount250}>$250.00</span>
      </div>
    </>
  );
};

export default Prices;
