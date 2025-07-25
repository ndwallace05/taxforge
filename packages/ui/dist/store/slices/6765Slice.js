import { createSlice } from '@reduxjs/toolkit';
interface;
6765;
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
6765;
Slice = createSlice({
    name: '6765',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 6765, Slice, actions;
export default 6765;
Slice.reducer;
// Selectors
export const select6765Values = (state) => state;
.6765.values;
export const select6765Errors = (state) => state;
.6765.errors;
export const select6765IsComplete = (state) => state;
.6765.isComplete;
export const select6765CalculatedLines = (state) => state;
.6765.calculatedLines;
