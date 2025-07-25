import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - KState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-KState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - kSlice;
createSlice({
    name: '1099-k',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - kSlice.actions;
export default 1099 - kSlice.reducer;
// Selectors
export const select1099;
-KValues;
(state) => state;
.1099 - k.values;
export const select1099;
-KErrors;
(state) => state;
.1099 - k.errors;
export const select1099;
-KIsComplete;
(state) => state;
.1099 - k.isComplete;
export const select1099;
-KCalculatedLines;
(state) => state;
.1099 - k.calculatedLines;
