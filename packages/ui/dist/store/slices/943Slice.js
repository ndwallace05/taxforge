import { createSlice } from '@reduxjs/toolkit';
interface;
943;
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
943;
Slice = createSlice({
    name: '943',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 943, Slice, actions;
export default 943;
Slice.reducer;
// Selectors
export const select943Values = (state) => state;
.943.values;
export const select943Errors = (state) => state;
.943.errors;
export const select943IsComplete = (state) => state;
.943.isComplete;
export const select943CalculatedLines = (state) => state;
.943.calculatedLines;
