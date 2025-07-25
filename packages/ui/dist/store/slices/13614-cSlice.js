import { createSlice } from '@reduxjs/toolkit';
interface;
13614 - CState;
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
13614 - cSlice;
createSlice({
    name: '13614-c',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 13614 - cSlice.actions;
export default 13614 - cSlice.reducer;
// Selectors
export const select13614;
-CValues;
(state) => state;
.13614 - c.values;
export const select13614;
-CErrors;
(state) => state;
.13614 - c.errors;
export const select13614;
-CIsComplete;
(state) => state;
.13614 - c.isComplete;
export const select13614;
-CCalculatedLines;
(state) => state;
.13614 - c.calculatedLines;
