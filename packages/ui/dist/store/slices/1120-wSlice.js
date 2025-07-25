import { createSlice } from '@reduxjs/toolkit';
interface;
1120 - WState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-WState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1120 - wSlice;
createSlice({
    name: '1120-w',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120 - wSlice.actions;
export default 1120 - wSlice.reducer;
// Selectors
export const select1120;
-WValues;
(state) => state;
.1120 - w.values;
export const select1120;
-WErrors;
(state) => state;
.1120 - w.errors;
export const select1120;
-WIsComplete;
(state) => state;
.1120 - w.isComplete;
export const select1120;
-WCalculatedLines;
(state) => state;
.1120 - w.calculatedLines;
