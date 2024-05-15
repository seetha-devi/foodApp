import { createSlice } from "@reduxjs/toolkit";
// import { useEffect } from "react";

const initialState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id ,image, name, price } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        item.quantity++;   
      } else {
        state.items.push({ id, image, name, price, quantity: 1 });
      }
     
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    }
  }
});



export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

export default cartSlice.reducer;
