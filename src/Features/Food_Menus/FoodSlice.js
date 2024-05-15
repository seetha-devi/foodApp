import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../../assets/assets";

const initialState = food_list; // Set the initial state to food_list directly

export const FoodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {}
});

export const foodReducer = FoodSlice.reducer; // Export the reducer as a named export

export default FoodSlice; 