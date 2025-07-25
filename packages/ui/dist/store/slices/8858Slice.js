import { createSlice } from '@reduxjs/toolkit';
interface;
8858;
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
8858;
Slice = createSlice({
    name: '8858',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8858, Slice, actions;
export default 8858;
Slice.reducer;
// Selectors
export const select8858Values = (state) => state;
.8858.values;
export const select8858Errors = (state) => state;
.8858.errors;
export const select8858IsComplete = (state) => state;
.8858.isComplete;
export const select8858CalculatedLines = (state) => state;
.8858.calculatedLines;
