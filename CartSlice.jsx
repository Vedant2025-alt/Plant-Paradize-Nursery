import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // each item: { name, image, cost, quantity }
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // payload: { name, image, cost }
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existing = state.items.find((item) => item.name === name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    // payload: plant name (string)
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    // payload: { name, quantity }
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existing = state.items.find((item) => item.name === name);
      if (!existing) return;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.name !== name);
      } else {
        existing.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
