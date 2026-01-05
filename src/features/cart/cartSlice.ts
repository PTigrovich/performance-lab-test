import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../entities/product/types';
import { CartItem } from '../../entities/cart/types';

interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            const existing = state.items.find(item => item.id === action.payload.id);

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        toggleCart(state) {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
