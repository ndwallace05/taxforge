import { createSlice } from '@reduxjs/toolkit';
interface;
8889;
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
8889;
Slice = createSlice({
    name: '8889',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8889, Slice, actions;
export default 8889;
Slice.reducer;
// Selectors
export const select8889Values = (state) => state;
.8889.values;
export const select8889Errors = (state) => state;
.8889.errors;
export const select8889IsComplete = (state) => state;
.8889.isComplete;
export const select8889CalculatedLines = (state) => state;
.8889.calculatedLines;
