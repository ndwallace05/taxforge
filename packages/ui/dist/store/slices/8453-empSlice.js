import { createSlice } from '@reduxjs/toolkit';
interface;
8453 - EMPState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-EMPState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
8453 - empSlice;
createSlice({
    name: '8453-emp',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8453 - empSlice.actions;
export default 8453 - empSlice.reducer;
// Selectors
export const select8453;
-EMPValues;
(state) => state;
.8453 - emp.values;
export const select8453;
-EMPErrors;
(state) => state;
.8453 - emp.errors;
export const select8453;
-EMPIsComplete;
(state) => state;
.8453 - emp.isComplete;
export const select8453;
-EMPCalculatedLines;
(state) => state;
.8453 - emp.calculatedLines;
