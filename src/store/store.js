// store.js
import { configureStore } from '@reduxjs/toolkit';
import { FoodSlice } from "../Features/Food_Menus/FoodSlice";
import {cartSlice} from "../Features/Cart/CartSlice";

const store = configureStore({
  reducer: {
    food: FoodSlice.reducer,
    cart: cartSlice.reducer
  }
});

export default store;
