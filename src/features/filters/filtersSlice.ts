import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category } from '../../entities/product/types';

interface FiltersState {
    category: Category;
}

const initialState: FiltersState = {
    category: 'food',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<Category>) {
            state.category = action.payload;
        },
    },
});

export const { setCategory } = filtersSlice.actions;
export default filtersSlice.reducer;
