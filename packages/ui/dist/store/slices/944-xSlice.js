import { createSlice } from '@reduxjs/toolkit';
interface;
944 - XState;
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
944 - xSlice;
createSlice({
    name: '944-x',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 944 - xSlice.actions;
export default 944 - xSlice.reducer;
// Selectors
export const select944;
-XValues;
(state) => state;
.944 - x.values;
export const select944;
-XErrors;
(state) => state;
.944 - x.errors;
export const select944;
-XIsComplete;
(state) => state;
.944 - x.isComplete;
export const select944;
-XCalculatedLines;
(state) => state;
.944 - x.calculatedLines;
