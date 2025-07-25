import { createSlice } from '@reduxjs/toolkit';
interface;
8917;
State;
{
    values: Record;
    errors: Record;
    isComplete: boolean;
    calculatedLines: Record;
}
const initialState, State = {
    values: {},
    errors: {},
    isComplete: false,
    calculatedLines: {}
};
const ;
8917;
Slice = createSlice({
    name: '8917',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8917, Slice, actions;
export default 8917;
Slice.reducer;
// Selectors
export const select8917Values = (state) => state;
.8917.values;
export const select8917Errors = (state) => state;
.8917.errors;
export const select8917IsComplete = (state) => state;
.8917.isComplete;
export const select8917CalculatedLines = (state) => state;
.8917.calculatedLines;
