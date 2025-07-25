import { createSlice } from '@reduxjs/toolkit';
interface;
5498 - ESAState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-ESAState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
5498 - esaSlice;
createSlice({
    name: '5498-esa',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5498 - esaSlice.actions;
export default 5498 - esaSlice.reducer;
// Selectors
export const select5498;
-ESAValues;
(state) => state;
.5498 - esa.values;
export const select5498;
-ESAErrors;
(state) => state;
.5498 - esa.errors;
export const select5498;
-ESAIsComplete;
(state) => state;
.5498 - esa.isComplete;
export const select5498;
-ESACalculatedLines;
(state) => state;
.5498 - esa.calculatedLines;
