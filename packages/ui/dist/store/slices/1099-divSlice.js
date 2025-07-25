import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - DIVState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-DIVState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - divSlice;
createSlice({
    name: '1099-div',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - divSlice.actions;
export default 1099 - divSlice.reducer;
// Selectors
export const select1099;
-DIVValues;
(state) => state;
.1099 - div.values;
export const select1099;
-DIVErrors;
(state) => state;
.1099 - div.errors;
export const select1099;
-DIVIsComplete;
(state) => state;
.1099 - div.isComplete;
export const select1099;
-DIVCalculatedLines;
(state) => state;
.1099 - div.calculatedLines;
