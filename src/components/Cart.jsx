function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Keranjang</h2>
      {cart.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - Rp{item.price}
              <button onClick={() => removeFromCart(index)}>Hapus</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
