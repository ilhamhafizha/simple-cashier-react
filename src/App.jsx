import { useState, useRef } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Receipt from "./components/Receipt";

function App() {
  const [products] = useState([
    { id: 1, name: "Indomie", price: 3000 },
    { id: 2, name: "Susu", price: 10000 },
    { id: 3, name: "Kopi", price: 5000 },
  ]);
  const [cart, setCart] = useState([]);
  const receiptRef = useRef();

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const resetCart = () => setCart([]);

  const handlePrint = () => {
    if (!receiptRef.current) return;
    const printContents = receiptRef.current.innerHTML;
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>Struk Belanja</title></head><body>");
    printWindow.document.write(printContents);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Cashier React App</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Receipt cart={cart} ref={receiptRef} />
      <button onClick={resetCart}>Reset</button>
      <button onClick={handlePrint}>Cetak Struk</button>
    </div>
  );
}

export default App;
