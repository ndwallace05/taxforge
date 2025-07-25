import { createSlice } from '@reduxjs/toolkit';
interface;
943 - XState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-XState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
943 - xSlice;
createSlice({
    name: '943-x',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 943 - xSlice.actions;
export default 943 - xSlice.reducer;
// Selectors
export const select943;
-XValues;
(state) => state;
.943 - x.values;
export const select943;
-XErrors;
(state) => state;
.943 - x.errors;
export const select943;
-XIsComplete;
(state) => state;
.943 - x.isComplete;
export const select943;
-XCalculatedLines;
(state) => state;
.943 - x.calculatedLines;
