import { createSlice } from '@reduxjs/toolkit';
interface;
1099 - GState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-GState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1099 - gSlice;
createSlice({
    name: '1099-g',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1099 - gSlice.actions;
export default 1099 - gSlice.reducer;
// Selectors
export const select1099;
-GValues;
(state) => state;
.1099 - g.values;
export const select1099;
-GErrors;
(state) => state;
.1099 - g.errors;
export const select1099;
-GIsComplete;
(state) => state;
.1099 - g.isComplete;
export const select1099;
-GCalculatedLines;
(state) => state;
.1099 - g.calculatedLines;
