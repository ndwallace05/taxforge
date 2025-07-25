import { createSlice } from '@reduxjs/toolkit';
interface;
941 - XState;
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
941 - xSlice;
createSlice({
    name: '941-x',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 941 - xSlice.actions;
export default 941 - xSlice.reducer;
// Selectors
export const select941;
-XValues;
(state) => state;
.941 - x.values;
export const select941;
-XErrors;
(state) => state;
.941 - x.errors;
export const select941;
-XIsComplete;
(state) => state;
.941 - x.isComplete;
export const select941;
-XCalculatedLines;
(state) => state;
.941 - x.calculatedLines;
