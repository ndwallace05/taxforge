import { createSlice } from '@reduxjs/toolkit';
interface;
6478;
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
6478;
Slice = createSlice({
    name: '6478',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 6478, Slice, actions;
export default 6478;
Slice.reducer;
// Selectors
export const select6478Values = (state) => state;
.6478.values;
export const select6478Errors = (state) => state;
.6478.errors;
export const select6478IsComplete = (state) => state;
.6478.isComplete;
export const select6478CalculatedLines = (state) => state;
.6478.calculatedLines;
