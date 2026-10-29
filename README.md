# Paradise Nursery

Paradise Nursery is an online houseplant shop built with React and Redux Toolkit.
Visitors can browse plants by category, add them to a shopping cart, and manage
quantities and totals in a dedicated cart page.

## Features

- Landing page with the company name, an About Us section and a **Get Started** button
- Product listing with 3 categories and 6 plants per category (thumbnail, name, price)
- **Add to Cart** buttons that disable once a plant is in the cart
- Navbar on the listing and cart pages with Home, Plants and Cart links
- Cart icon showing the live total item count
- Cart page with per-plant subtotal, overall total, +/- quantity controls and delete
- Checkout button ("Coming Soon") and Continue Shopping button

## Tech stack

React 18, Redux Toolkit, React-Redux, Vite

## Project structure

| File | Purpose |
| --- | --- |
| `src/App.jsx` | Landing page and view switching |
| `src/App.css` | Landing page background image and global styles |
| `src/AboutUs.jsx` | Company description |
| `src/CartSlice.jsx` | Redux slice for the cart |
| `src/store.js` | Redux store |
| `src/Navbar.jsx` | Shared navigation bar with cart count |
| `src/ProductList.jsx` | Plant listing by category |
| `src/CartItem.jsx` | Shopping cart page |
| `src/plantsData.js` | Plant catalogue data |

## Run locally

```bash
npm install
npm run dev
```

Build for production with `npm run build`.
