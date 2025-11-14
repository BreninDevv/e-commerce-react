import React, { useEffect, useState } from "react";
import menuIcon from "../../assets/icon-menu.svg";
import logo from "../../assets/logo.svg";
import cart from "../../assets/icon-cart.svg";
import loginImage from "../../assets/image-avatar.png";
import iconCloseMenu from "../../assets/icon-close.svg";
import styles from "./header.module.css";

const Header = ({ cartTotalQuantity }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

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
            <div className={styles.cartContainer}>
              <a href="#">
                <img src={cart} alt="cart" />
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
