function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Daftar Barang</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - Rp{product.price}
            <button onClick={() => addToCart(product)}>Tambah ke Keranjang</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
