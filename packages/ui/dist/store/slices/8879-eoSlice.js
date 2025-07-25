import { createSlice } from '@reduxjs/toolkit';
interface;
8879 - EOState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-EOState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
8879 - eoSlice;
createSlice({
    name: '8879-eo',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8879 - eoSlice.actions;
export default 8879 - eoSlice.reducer;
// Selectors
export const select8879;
-EOValues;
(state) => state;
.8879 - eo.values;
export const select8879;
-EOErrors;
(state) => state;
.8879 - eo.errors;
export const select8879;
-EOIsComplete;
(state) => state;
.8879 - eo.isComplete;
export const select8879;
-EOCalculatedLines;
(state) => state;
.8879 - eo.calculatedLines;
