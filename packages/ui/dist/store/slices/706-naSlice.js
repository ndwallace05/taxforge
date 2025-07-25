import { createSlice } from '@reduxjs/toolkit';
interface;
706 - NAState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-NAState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
706 - naSlice;
createSlice({
    name: '706-na',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706 - naSlice.actions;
export default 706 - naSlice.reducer;
// Selectors
export const select706;
-NAValues;
(state) => state;
.706 - na.values;
export const select706;
-NAErrors;
(state) => state;
.706 - na.errors;
export const select706;
-NAIsComplete;
(state) => state;
.706 - na.isComplete;
export const select706;
-NACalculatedLines;
(state) => state;
.706 - na.calculatedLines;
