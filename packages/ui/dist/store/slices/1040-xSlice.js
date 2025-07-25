import { createSlice } from '@reduxjs/toolkit';
interface;
1040 - XState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-XState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
1040 - xSlice;
createSlice({
    name: '1040-x',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1040 - xSlice.actions;
export default 1040 - xSlice.reducer;
// Selectors
export const select1040;
-XValues;
(state) => state;
.1040 - x.values;
export const select1040;
-XErrors;
(state) => state;
.1040 - x.errors;
export const select1040;
-XIsComplete;
(state) => state;
.1040 - x.isComplete;
export const select1040;
-XCalculatedLines;
(state) => state;
.1040 - x.calculatedLines;
