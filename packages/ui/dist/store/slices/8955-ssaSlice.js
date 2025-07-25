import { createSlice } from '@reduxjs/toolkit';
interface;
8955 - SSAState;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState;
-SSAState;
{
    values: { }
    errors: { }
    isComplete: false,
        calculatedLines;
    { }
}
;
const ;
8955 - ssaSlice;
createSlice({
    name: '8955-ssa',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8955 - ssaSlice.actions;
export default 8955 - ssaSlice.reducer;
// Selectors
export const select8955;
-SSAValues;
(state) => state;
.8955 - ssa.values;
export const select8955;
-SSAErrors;
(state) => state;
.8955 - ssa.errors;
export const select8955;
-SSAIsComplete;
(state) => state;
.8955 - ssa.isComplete;
export const select8955;
-SSACalculatedLines;
(state) => state;
.8955 - ssa.calculatedLines;
