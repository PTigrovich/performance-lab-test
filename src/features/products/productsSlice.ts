import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../entities/product/types';
import { RootState } from '../../app/store';

export type SortOrder = 'asc' | 'desc';

interface ProductsState {
    items: Product[];
    page: number;
    limit: number;
    sortOrder: SortOrder;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    total: number;
}


interface FetchProductsArgs {
    category?: string;
    page?: number;
    limit?: number;
    sortOrder?: SortOrder;
}

export const fetchProducts = createAsyncThunk<{ items: Product[]; total: number }, FetchProductsArgs>(
    'products/fetchProducts',
    async ({ category, page = 1, limit = 4, sortOrder = 'asc' }) => {
        const params = new URLSearchParams();

        if (category) params.append('category', category);
        params.append('_page', page.toString());
        params.append('_limit', limit.toString());
        params.append('_sort', 'title');
        params.append('_order', sortOrder);

        const response = await fetch(`http://localhost:3001/products?${params.toString()}`);

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const items = await response.json();
        const total = Number(response.headers.get('X-Total-Count')) || 0;

        return { items, total };
    }
);


const initialState: ProductsState = {
    items: [],
    page: 1,
    limit: 4,
    sortOrder: 'asc',
    status: 'idle',
    error: null,
    total: 0,
};


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        toggleSortOrder(state) {
            state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
            state.page = 1;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, state => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload.items;
                state.total = action.payload.total;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to load';
            });
    },
});

export const { setPage, toggleSortOrder } = productsSlice.actions;
export default productsSlice.reducer;
