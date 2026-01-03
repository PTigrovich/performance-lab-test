import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../entities/product/types';
import { mockProducts } from './mockProducts';

interface ProductsState {
    items: Product[];
    page: number;
    limit: number;
}

const initialState: ProductsState = {
    items: mockProducts,
    page: 1,
    limit: 4,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
    },
});

export const { setPage } = productsSlice.actions;
export default productsSlice.reducer;
