import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../entities/product/types';
import { mockProducts } from './mockProducts';

interface ProductsState {
    items: Product[];
    page: number;
    limit: number;
    sortOrder: SortOrder;
}

const initialState: ProductsState = {
    items: mockProducts,
    page: 1,
    limit: 4,
    sortOrder: 'asc',
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload;
        },
        toggleSortOrder(state) {
            state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
            state.page = 1; // сбрасываем страницу — важный UX момент
        },
    },
});


export type SortOrder = 'asc' | 'desc';
export const { setPage, toggleSortOrder } = productsSlice.actions;
export default productsSlice.reducer;
