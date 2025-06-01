function Receipt({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Struk</h2>
      <p>Total: Rp{total}</p>
    </div>
  );
}

export default Receipt;
