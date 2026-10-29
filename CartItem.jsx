import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import Navbar from './Navbar';

function CartItem({ onNavigate }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const itemTotal = (item) => item.cost * item.quantity;

  const calculateTotalAmount = () =>
    items.reduce((sum, item) => sum + itemTotal(item), 0);

  const handleIncrement = (item) =>
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));

  const handleDecrement = (item) => {
    // updateQuantity removes the item when quantity drops to 0
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };

  const handleRemove = (item) => dispatch(removeItem(item.name));

  const handleCheckout = () => alert('Checkout is Coming Soon!');

  return (
    <div>
      <Navbar onNavigate={onNavigate} active="cart" />

      <main className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="cart-total-amount">
          Total Cart Amount: <strong>${calculateTotalAmount().toFixed(2)}</strong>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">Your cart is empty. Add a few plants to get started.</div>
        ) : (
          items.map((item) => (
            <div className="cart-row" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>Unit price: ${item.cost.toFixed(2)}</p>
                <p>
                  Total: <strong>${itemTotal(item).toFixed(2)}</strong>
                </p>
              </div>
              <div className="qty-controls">
                <button
                  className="qty-btn"
                  aria-label={`Decrease quantity of ${item.name}`}
                  onClick={() => handleDecrement(item)}
                >
                  −
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  className="qty-btn"
                  aria-label={`Increase quantity of ${item.name}`}
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <button className="delete-btn" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          ))
        )}

        <div className="cart-actions">
          <button className="continue-btn" onClick={() => onNavigate('plants')}>
            Continue Shopping
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
}

export default CartItem;
