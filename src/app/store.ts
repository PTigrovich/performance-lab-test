import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        // reducers будем добавлять сюда
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;