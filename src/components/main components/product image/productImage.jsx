import React, { useEffect, useState } from "react";
import imageMain from "../../../assets/image-product-1.jpg";
import iconPrevious from "../../../assets/icon-previous.svg";
import iconNext from "../../../assets/icon-next.svg";
import image2 from "../../../assets/image-product-2.jpg";
import image3 from "../../../assets/image-product-3.jpg";
import image4 from "../../../assets/image-product-4.jpg";
import styles from "./productImage.module.css";

const ProductImage = () => {
  const [image, setImage] = useState(imageMain);

  const nextImage = () => {
    if (image === imageMain) {
      setImage(image2);
    } else if (image === image2) {
      setImage(image3);
    } else if (image === image3) {
      setImage(image4);
    }
  };

  const previousImage = () => {
    if (image === image4) {
      setImage(image3);
    } else if (image === image3) {
      setImage(image2);
    } else if (image === image2) {
      setImage(imageMain);
    }
  };

  useEffect(() => {
    if (image === imageMain) {
      document.getElementById("previous").classList.add("on");
    } else if (image === image4) {
      document.getElementById("next").classList.add("on");
    } else {
      document.getElementById("previous").classList.remove("on");
      document.getElementById("next").classList.remove("on");
    }
  }, [image]);

  return (
    <>
      <div className={styles.imagesMain}>
        <img className={styles.images} src={image} alt="image-main" />

        <div
          onClick={() => previousImage()}
          id="previous"
          className={styles.btnPrevious}
        >
          <img src={iconPrevious} alt="icon-previous" />
        </div>
        <div onClick={() => nextImage()} id="next" className={styles.btnNext}>
          <img src={iconNext} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProductImage;
