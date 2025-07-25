import { createSlice } from '@reduxjs/toolkit';
interface;
1120 - HState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-HState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1120 - hSlice;
createSlice({
    name: '1120-h',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120 - hSlice.actions;
export default 1120 - hSlice.reducer;
// Selectors
export const select1120;
-HValues;
(state) => state;
.1120 - h.values;
export const select1120;
-HErrors;
(state) => state;
.1120 - h.errors;
export const select1120;
-HIsComplete;
(state) => state;
.1120 - h.isComplete;
export const select1120;
-HCalculatedLines;
(state) => state;
.1120 - h.calculatedLines;
