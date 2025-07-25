import { createSlice } from '@reduxjs/toolkit';
interface;
1098 - TState;
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
1098 - tSlice;
createSlice({
    name: '1098-t',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098 - tSlice.actions;
export default 1098 - tSlice.reducer;
// Selectors
export const select1098;
-TValues;
(state) => state;
.1098 - t.values;
export const select1098;
-TErrors;
(state) => state;
.1098 - t.errors;
export const select1098;
-TIsComplete;
(state) => state;
.1098 - t.isComplete;
export const select1098;
-TCalculatedLines;
(state) => state;
.1098 - t.calculatedLines;
