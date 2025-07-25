import { createSlice } from '@reduxjs/toolkit';
interface;
1065 - BState;
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
1065 - bSlice;
createSlice({
    name: '1065-b',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1065 - bSlice.actions;
export default 1065 - bSlice.reducer;
// Selectors
export const select1065;
-BValues;
(state) => state;
.1065 - b.values;
export const select1065;
-BErrors;
(state) => state;
.1065 - b.errors;
export const select1065;
-BIsComplete;
(state) => state;
.1065 - b.isComplete;
export const select1065;
-BCalculatedLines;
(state) => state;
.1065 - b.calculatedLines;
