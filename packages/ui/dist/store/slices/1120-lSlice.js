import { createSlice } from '@reduxjs/toolkit';
interface;
1120 - LState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-LState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1120 - lSlice;
createSlice({
    name: '1120-l',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120 - lSlice.actions;
export default 1120 - lSlice.reducer;
// Selectors
export const select1120;
-LValues;
(state) => state;
.1120 - l.values;
export const select1120;
-LErrors;
(state) => state;
.1120 - l.errors;
export const select1120;
-LIsComplete;
(state) => state;
.1120 - l.isComplete;
export const select1120;
-LCalculatedLines;
(state) => state;
.1120 - l.calculatedLines;
