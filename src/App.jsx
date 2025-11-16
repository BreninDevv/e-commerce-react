import { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main components/main";

function App() {
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  // 2. Função que adiciona a nova quantidade ao total
  const handleUpdateCartTotal = (quantityToAdd) => {
    setCartTotalQuantity((prevTotal) => prevTotal + quantityToAdd);
  };

  return (
    <>
      <div className="header">
        <Header
          cartTotalQuantity={cartTotalQuantity}
          setCartTotalQuantity={setCartTotalQuantity}
        />
      </div>
      <Main onAddToCart={handleUpdateCartTotal} />
    </>
  );
}
export default App;
