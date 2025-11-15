import React, { useEffect, useState } from "react";
import menuIcon from "../../assets/icon-menu.svg";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import loginImage from "../../assets/image-avatar.png";
import iconCloseMenu from "../../assets/icon-close.svg";
import thumbnailMain from "../../assets/image-product-1-thumbnail.jpg";
import iconDelete from "../../assets/icon-delete.svg";
import styles from "./header.module.css";

const Header = ({ cartTotalQuantity, setCartTotalQuantity }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  const toggleCart = () => {
    setCartOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  const resultadoSneakers = 125 * cartTotalQuantity;

  const removeCart = () => {
    setCartTotalQuantity((cartTotalQuantity = 0));
  };

  return (
    <>
      <header>
        <nav>
          <div className={styles.menu}>
            <div id="menu">
              <a href="#">
                <img src={menuIcon} onClick={toggleMenu} alt="icon-menu" />
              </a>
            </div>

            {menuOpen && (
              <div
                className={`${styles.menuOverlay} ${menuOpen ? styles.on : ""}`}
              >
                <div className={styles.closeIcon} onClick={toggleMenu}>
                  <img src={iconCloseMenu} alt="icon-close-menu" />
                </div>
                <div className={styles.menuItems}>
                  <ul>
                    <li>
                      <a href="#"></a>Collections
                    </li>
                    <li>
                      <a href="#"></a>Men
                    </li>
                    <li>
                      <a href="#"></a>Women
                    </li>
                    <li>
                      <a href="#"></a>About
                    </li>
                    <li>
                      <a href="#"></a>Contact
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <a href="#" className={styles.logo}>
              <img src={logo} alt="logo" />
            </a>
            {cartOpen && (
              <div className={styles.cartOpen}>
                <span className={styles.spanCart}>Cart</span>
                <hr />
                {cartTotalQuantity > 0 && (
                  <div className={styles.cartFlex}>
                    <div onClick={removeCart} className={styles.divDelete}>
                      <img src={iconDelete} alt="icon-delete" />
                    </div>
                    <img
                      className={styles.thumbnailImage}
                      src={thumbnailMain}
                      alt="thumbnail-main"
                    />
                    <div className={styles.span}>
                      <div>
                        <span className={styles.spanGray}>
                          Fall Limited Edition Sneakers
                        </span>
                      </div>
                      <span className={styles.spanGray}>
                        $125.00 x {cartTotalQuantity}{" "}
                        <span className={styles.spanStrong}>
                          ${resultadoSneakers}.00
                        </span>
                      </span>
                    </div>
                    <div className={styles.btnCheckout}>
                      <span className={styles.spanCheckout}>Checkout</span>
                    </div>
                  </div>
                )}
                {cartTotalQuantity === 0 && (
                  <div className={styles.empty}>
                    <span className={styles.spanEmpty}>
                      Your cart is empty.
                    </span>
                  </div>
                )}
              </div>
            )}
            <div className={styles.cartContainer}>
              <a href="#">
                <img src={cart} onClick={toggleCart} alt="cart" />
              </a>
              {cartTotalQuantity > 0 && (
                <span className={styles.cartBadge}>{cartTotalQuantity}</span>
              )}
            </div>
            <a href="#">
              <img src={loginImage} alt="login image" width={25} />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
