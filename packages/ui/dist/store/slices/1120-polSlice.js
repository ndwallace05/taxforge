import { createSlice } from '@reduxjs/toolkit';
interface;
1120 - POLState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-POLState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1120 - polSlice;
createSlice({
    name: '1120-pol',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120 - polSlice.actions;
export default 1120 - polSlice.reducer;
// Selectors
export const select1120;
-POLValues;
(state) => state;
.1120 - pol.values;
export const select1120;
-POLErrors;
(state) => state;
.1120 - pol.errors;
export const select1120;
-POLIsComplete;
(state) => state;
.1120 - pol.isComplete;
export const select1120;
-POLCalculatedLines;
(state) => state;
.1120 - pol.calculatedLines;
