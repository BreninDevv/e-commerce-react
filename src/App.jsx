import menuIcon from "./assets/icon-menu.svg";
import logo from "./assets/logo.svg";
import cart from "./assets/icon-cart.svg";
import loginImage from "./assets/image-avatar.png";

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="menu">
            <a href="#">
              <img src={menuIcon} alt="icon-menu" />
            </a>
            <a href="#" className="logo">
              <img src={logo} alt="logo" />
            </a>

            <a href="#">
              <img src={cart} alt="cart" />
            </a>
            <a href="#">
              <img src={loginImage} alt="login image" width={25} />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
export default App;
