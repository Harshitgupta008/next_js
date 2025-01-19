import { createSlice } from "@reduxjs/toolkit";

interface ProductsType {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    brand: string;
    model: string;
    color: string;
    category: string;
    discount: number
}
interface initialStateType {
    cartItem: ProductsType[];
    totalPrice: number,
    totalItem: number,
}

const initialState: initialStateType = {
    cartItem: [],
    totalPrice: 0,
    totalItem: 0,
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findData = state.cartItem.findIndex((item) => item.id === action.payload.id)
            if (findData === -1) {
                state.cartItem.push(action.payload);
                state.totalPrice += action.payload.price;
                state.totalItem += 1;
            }
        },
        removeItem: (state, action) => {
            state.cartItem = state.cartItem.filter(item => item.id !== action.payload.id)
            state.totalPrice -= action.payload.price;
            state.totalItem -= 1;
        },
        removeAllItem: (state) => {
            state.cartItem = [];
            state.totalPrice = 0;
            state.totalItem = 0;
        }
    }
})

export const { addToCart, removeItem, removeAllItem } = CartSlice.actions;
export default CartSlice.reducer;