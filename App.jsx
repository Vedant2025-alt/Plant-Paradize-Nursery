import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function App() {
  // 'home' | 'plants' | 'cart'
  const [view, setView] = useState('home');

  if (view === 'plants') {
    return <ProductList onNavigate={setView} />;
  }

  if (view === 'cart') {
    return <CartItem onNavigate={setView} />;
  }

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p className="tagline">Where green meets serenity</p>
          <button className="get-started-btn" onClick={() => setView('plants')}>
            Get Started
          </button>
        </div>
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
