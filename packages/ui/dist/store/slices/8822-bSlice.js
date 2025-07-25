import { createSlice } from '@reduxjs/toolkit';
interface;
8822 - BState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-BState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
8822 - bSlice;
createSlice({
    name: '8822-b',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.values[action.payload.field] = action.payload.value;
            // Clear error when value is set
            delete state.errors[action.payload.field];
        },
        setError: (state, action) => {
            state.errors[action.payload.field] = action.payload.error;
        },
        setCalculatedValue: (state, action) => {
            state.calculatedLines[action.payload.field] = action.payload.value;
        },
        setComplete: (state, action) => {
            state.isComplete = action.payload;
        },
        reset: () => initialState
    }
});
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8822 - bSlice.actions;
export default 8822 - bSlice.reducer;
// Selectors
export const select8822;
-BValues;
(state) => state;
.8822 - b.values;
export const select8822;
-BErrors;
(state) => state;
.8822 - b.errors;
export const select8822;
-BIsComplete;
(state) => state;
.8822 - b.isComplete;
export const select8822;
-BCalculatedLines;
(state) => state;
.8822 - b.calculatedLines;
