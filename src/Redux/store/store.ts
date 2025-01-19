import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/Redux/feature/CartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})