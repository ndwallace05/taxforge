import { createSlice } from '@reduxjs/toolkit';
interface;
8879 - CState;
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
8879 - cSlice;
createSlice({
    name: '8879-c',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8879 - cSlice.actions;
export default 8879 - cSlice.reducer;
// Selectors
export const select8879;
-CValues;
(state) => state;
.8879 - c.values;
export const select8879;
-CErrors;
(state) => state;
.8879 - c.errors;
export const select8879;
-CIsComplete;
(state) => state;
.8879 - c.isComplete;
export const select8879;
-CCalculatedLines;
(state) => state;
.8879 - c.calculatedLines;
