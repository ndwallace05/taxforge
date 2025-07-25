import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - CState;
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
1099 - cSlice;
createSlice({
    name: '1099-c',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - cSlice.actions;
export default 1099 - cSlice.reducer;
// Selectors
export const select1099;
-CValues;
(state) => state;
.1099 - c.values;
export const select1099;
-CErrors;
(state) => state;
.1099 - c.errors;
export const select1099;
-CIsComplete;
(state) => state;
.1099 - c.isComplete;
export const select1099;
-CCalculatedLines;
(state) => state;
.1099 - c.calculatedLines;
