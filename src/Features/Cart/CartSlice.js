import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, image, name, price } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity++;   
      } else {
        state.items.push({ id, image, name, price, quantity: 1 });
      }

      // Update total whenever an item is added
      state.total += price;
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          state.total -= item.price;  // Adjust total when quantity decreases
        } else {
          state.items = state.items.filter(item => item.id !== id);
          state.total -= item.price;  // Adjust total when item is removed
        }
      }
    },
    // getTotalCart: (state) => {
    //   let total = 0;
    //   state.items.forEach(item => {
    //     total += item.price * item.quantity;
    //   });
    //   state.total = total;
    // }
  }
});

export const { addToCart, removeFromCart, getTotalCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
export const selectCartTotal = state => state.cart.total;

export default cartSlice.reducer;
