import { createSlice } from '@reduxjs/toolkit';
interface;
709 - AState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-AState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
709 - aSlice;
createSlice({
    name: '709-a',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 709 - aSlice.actions;
export default 709 - aSlice.reducer;
// Selectors
export const select709;
-AValues;
(state) => state;
.709 - a.values;
export const select709;
-AErrors;
(state) => state;
.709 - a.errors;
export const select709;
-AIsComplete;
(state) => state;
.709 - a.isComplete;
export const select709;
-ACalculatedLines;
(state) => state;
.709 - a.calculatedLines;
