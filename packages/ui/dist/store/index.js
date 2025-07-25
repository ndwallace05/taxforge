import { configureStore } from '@reduxjs/toolkit';
import { form1040Slice } from './slices/form1040Slice';
import { form1040SRReducer } from './slices/form1040SRSlice';
import { form1040NRReducer } from './slices/form1040NRSlice';
export const store = configureStore({
    reducer: {
        form1040: form1040Slice.reducer,
        form1040SR: form1040SRReducer,
        form1040NR: form1040NRReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
    }),
    devTools: process.env.NODE_ENV !== 'production',
});
// Typed hooks
export { useAppDispatch, useAppSelector } from './hooks';
export default store;
