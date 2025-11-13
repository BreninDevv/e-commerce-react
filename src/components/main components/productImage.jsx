import React from "react";
import imageMain from "../../assets/image-product-1.jpg";
import iconPrevious from "../../assets/icon-previous.svg";
import iconNext from "../../assets/icon-next.svg";

const ProductImage = () => {
  return (
    <>
      <div className="images-main">
        <img className="images" src={imageMain} alt="image-main" />

        <div className="btnPrevious">
          <img src={iconPrevious} alt="icon-previous" />
        </div>
        <div className="btnNext">
          <img src={iconNext} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProductImage;
