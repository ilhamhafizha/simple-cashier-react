import { forwardRef } from "react";

const Receipt = forwardRef(({ cart }, ref) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div ref={ref}>
      <h2>Struk</h2>
      {cart.map((item, index) => (
        <p key={index}>
          {item.name}: Rp{item.price} x {item.quantity} = Rp{item.price * item.quantity}
        </p>
      ))}
      <hr />
      <p>
        <strong>Total = Rp{total}</strong>
      </p>
    </div>
  );
});

export default Receipt;
