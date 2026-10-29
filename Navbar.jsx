import React from 'react';
import { useSelector } from 'react-redux';

function Navbar({ onNavigate, active }) {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <span className="navbar-brand">Paradise Nursery</span>
      <div className="navbar-links">
        <button
          className={`nav-link ${active === 'home' ? 'active' : ''}`}
          onClick={() => onNavigate('home')}
        >
          Home
        </button>
        <button
          className={`nav-link ${active === 'plants' ? 'active' : ''}`}
          onClick={() => onNavigate('plants')}
        >
          Plants
        </button>
        <button
          className={`nav-link cart-link ${active === 'cart' ? 'active' : ''}`}
          onClick={() => onNavigate('cart')}
          aria-label={`Cart, ${totalItems} items`}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
          </svg>
          <span className="cart-count">{totalItems}</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
