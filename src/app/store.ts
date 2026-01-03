import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../features/filters/filtersSlice';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';


export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        products: productsReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
