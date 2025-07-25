import { createSlice } from '@reduxjs/toolkit';
interface;
990 - PFState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-PFState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
990 - pfSlice;
createSlice({
    name: '990-pf',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 990 - pfSlice.actions;
export default 990 - pfSlice.reducer;
// Selectors
export const select990;
-PFValues;
(state) => state;
.990 - pf.values;
export const select990;
-PFErrors;
(state) => state;
.990 - pf.errors;
export const select990;
-PFIsComplete;
(state) => state;
.990 - pf.isComplete;
export const select990;
-PFCalculatedLines;
(state) => state;
.990 - pf.calculatedLines;
