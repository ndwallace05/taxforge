import { createSlice } from '@reduxjs/toolkit';
interface;
945 - XState;
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
945 - xSlice;
createSlice({
    name: '945-x',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 945 - xSlice.actions;
export default 945 - xSlice.reducer;
// Selectors
export const select945;
-XValues;
(state) => state;
.945 - x.values;
export const select945;
-XErrors;
(state) => state;
.945 - x.errors;
export const select945;
-XIsComplete;
(state) => state;
.945 - x.isComplete;
export const select945;
-XCalculatedLines;
(state) => state;
.945 - x.calculatedLines;
