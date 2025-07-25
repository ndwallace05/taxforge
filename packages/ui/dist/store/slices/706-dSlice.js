import { createSlice } from '@reduxjs/toolkit';
interface;
706 - DState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-DState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
706 - dSlice;
createSlice({
    name: '706-d',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706 - dSlice.actions;
export default 706 - dSlice.reducer;
// Selectors
export const select706;
-DValues;
(state) => state;
.706 - d.values;
export const select706;
-DErrors;
(state) => state;
.706 - d.errors;
export const select706;
-DIsComplete;
(state) => state;
.706 - d.isComplete;
export const select706;
-DCalculatedLines;
(state) => state;
.706 - d.calculatedLines;
