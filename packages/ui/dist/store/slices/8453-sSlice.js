import { createSlice } from '@reduxjs/toolkit';
interface;
8453 - SState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-SState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
8453 - sSlice;
createSlice({
    name: '8453-s',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8453 - sSlice.actions;
export default 8453 - sSlice.reducer;
// Selectors
export const select8453;
-SValues;
(state) => state;
.8453 - s.values;
export const select8453;
-SErrors;
(state) => state;
.8453 - s.errors;
export const select8453;
-SIsComplete;
(state) => state;
.8453 - s.isComplete;
export const select8453;
-SCalculatedLines;
(state) => state;
.8453 - s.calculatedLines;
