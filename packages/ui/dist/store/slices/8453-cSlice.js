import { createSlice } from '@reduxjs/toolkit';
interface;
8453 - CState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-CState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
8453 - cSlice;
createSlice({
    name: '8453-c',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8453 - cSlice.actions;
export default 8453 - cSlice.reducer;
// Selectors
export const select8453;
-CValues;
(state) => state;
.8453 - c.values;
export const select8453;
-CErrors;
(state) => state;
.8453 - c.errors;
export const select8453;
-CIsComplete;
(state) => state;
.8453 - c.isComplete;
export const select8453;
-CCalculatedLines;
(state) => state;
.8453 - c.calculatedLines;
