import { createSlice } from '@reduxjs/toolkit';
interface;
1120 - CState;
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
1120 - cSlice;
createSlice({
    name: '1120-c',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1120 - cSlice.actions;
export default 1120 - cSlice.reducer;
// Selectors
export const select1120;
-CValues;
(state) => state;
.1120 - c.values;
export const select1120;
-CErrors;
(state) => state;
.1120 - c.errors;
export const select1120;
-CIsComplete;
(state) => state;
.1120 - c.isComplete;
export const select1120;
-CCalculatedLines;
(state) => state;
.1120 - c.calculatedLines;
