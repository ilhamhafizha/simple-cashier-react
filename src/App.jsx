import { useState } from "react";

import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Receipt from "./components/Receipt";

function App() {
  const [products] = useState([
    { name: "Indomie", price: 3000 },
    { name: "Susu", price: 10000 },
    { name: "Kopi", price: 5000 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h1>Cashier Simple App</h1>
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
        <Receipt cart={cart} />
        <button onClick={resetCart}>Reset</button>
      </div>
    </>
  );
}

export default App;
