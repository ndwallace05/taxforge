import { createSlice } from '@reduxjs/toolkit';
interface;
1098 - EState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-EState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1098 - eSlice;
createSlice({
    name: '1098-e',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098 - eSlice.actions;
export default 1098 - eSlice.reducer;
// Selectors
export const select1098;
-EValues;
(state) => state;
.1098 - e.values;
export const select1098;
-EErrors;
(state) => state;
.1098 - e.errors;
export const select1098;
-EIsComplete;
(state) => state;
.1098 - e.isComplete;
export const select1098;
-ECalculatedLines;
(state) => state;
.1098 - e.calculatedLines;
