import { createSlice } from '@reduxjs/toolkit';
interface;
5498 - SAState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-SAState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
5498 - saSlice;
createSlice({
    name: '5498-sa',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5498 - saSlice.actions;
export default 5498 - saSlice.reducer;
// Selectors
export const select5498;
-SAValues;
(state) => state;
.5498 - sa.values;
export const select5498;
-SAErrors;
(state) => state;
.5498 - sa.errors;
export const select5498;
-SAIsComplete;
(state) => state;
.5498 - sa.isComplete;
export const select5498;
-SACalculatedLines;
(state) => state;
.5498 - sa.calculatedLines;
