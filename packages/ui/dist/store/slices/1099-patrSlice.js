import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - PATRState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-PATRState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - patrSlice;
createSlice({
    name: '1099-patr',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - patrSlice.actions;
export default 1099 - patrSlice.reducer;
// Selectors
export const select1099;
-PATRValues;
(state) => state;
.1099 - patr.values;
export const select1099;
-PATRErrors;
(state) => state;
.1099 - patr.errors;
export const select1099;
-PATRIsComplete;
(state) => state;
.1099 - patr.isComplete;
export const select1099;
-PATRCalculatedLines;
(state) => state;
.1099 - patr.calculatedLines;
