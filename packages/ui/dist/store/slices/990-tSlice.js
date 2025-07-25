import { createSlice } from '@reduxjs/toolkit';
interface;
990 - TState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-TState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
990 - tSlice;
createSlice({
    name: '990-t',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 990 - tSlice.actions;
export default 990 - tSlice.reducer;
// Selectors
export const select990;
-TValues;
(state) => state;
.990 - t.values;
export const select990;
-TErrors;
(state) => state;
.990 - t.errors;
export const select990;
-TIsComplete;
(state) => state;
.990 - t.isComplete;
export const select990;
-TCalculatedLines;
(state) => state;
.990 - t.calculatedLines;
