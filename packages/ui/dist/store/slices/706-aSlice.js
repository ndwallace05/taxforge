import { createSlice } from '@reduxjs/toolkit';
interface;
706 - AState;
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
706 - aSlice;
createSlice({
    name: '706-a',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706 - aSlice.actions;
export default 706 - aSlice.reducer;
// Selectors
export const select706;
-AValues;
(state) => state;
.706 - a.values;
export const select706;
-AErrors;
(state) => state;
.706 - a.errors;
export const select706;
-AIsComplete;
(state) => state;
.706 - a.isComplete;
export const select706;
-ACalculatedLines;
(state) => state;
.706 - a.calculatedLines;
