import React, { useEffect, useState } from "react";
import imageMain from "../../../assets/image-product-1.jpg";
import iconPrevious from "../../../assets/icon-previous.svg";
import iconNext from "../../../assets/icon-next.svg";
import image2 from "../../../assets/image-product-2.jpg";
import image3 from "../../../assets/image-product-3.jpg";
import image4 from "../../../assets/image-product-4.jpg";
import thumbnailMain from "../../../assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../../../assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../../../assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../../../assets/image-product-4-thumbnail.jpg";
import iconClose from "../../../assets/icon-close.svg";
import styles from "./productImage.module.css";

const ProductImage = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const imagesArray = [imageMain, image2, image3, image4];
  const thumbnailsArray = [thumbnailMain, thumbnail2, thumbnail3, thumbnail4];

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  const [imageActive, setImageActive] = useState(false);

  const activeImage = () => {
    setImageActive((prev) => !prev);
  };

  return (
    <>
      <div className={styles.flexImage}>
        <div className={styles.imagesMain}>
          <img
            className={styles.images}
            src={imagesArray[currentImageIndex]}
            alt="image-main"
            onClick={() => isDesktop && activeImage()}
          />

          <div className={styles.thumbnails}>
            {thumbnailsArray.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                onClick={() => setCurrentImageIndex(index)}
                alt={`thumbnail-${index + 1}`}
                className={
                  currentImageIndex === index ? styles.activeThumb : ""
                }
              />
            ))}
          </div>

          <div
            id="activeImage"
            className={`${styles.activeImage} ${
              imageActive ? styles.active : ""
            }`}
          >
            <div className={styles.lightboxContent}>
              <div className={styles.btnClose} onClick={activeImage}>
                <img src={iconClose} alt="close" />
              </div>

              <img
                className={styles.imagesLightbox}
                src={imagesArray[currentImageIndex]}
                alt="image-main-lightbox"
              />

              <div
                onClick={previousImage}
                className={`${styles.btnPrevious} ${styles.btnLightboxPrevious}`}
              >
                <img src={iconPrevious} alt="icon-previous" />
              </div>
              <div
                onClick={nextImage}
                className={`${styles.btnNext} ${styles.btnLightboxNext}`}
              >
                <img src={iconNext} alt="icon-next" />
              </div>
              <div className={styles.thumbnails2}>
                {thumbnailsArray.map((thumb, index) => (
                  <img
                    key={`lightbox-thumb-${index}`}
                    src={thumb}
                    onClick={() => setCurrentImageIndex(index)}
                    alt={`thumbnail-lightbox-${index + 1}`}
                    className={
                      currentImageIndex === index ? styles.activeThumb : ""
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            onClick={previousImage}
            id="previous"
            className={styles.btnPrevious}
          >
            <img src={iconPrevious} alt="icon-previous" />
          </div>
          <div onClick={nextImage} id="next" className={styles.btnNext}>
            <img src={iconNext} alt="icon-next" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImage;
