import { createSlice } from '@reduxjs/toolkit';
interface;
8880;
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
8880;
Slice = createSlice({
    name: '8880',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8880, Slice, actions;
export default 8880;
Slice.reducer;
// Selectors
export const select8880Values = (state) => state;
.8880.values;
export const select8880Errors = (state) => state;
.8880.errors;
export const select8880IsComplete = (state) => state;
.8880.isComplete;
export const select8880CalculatedLines = (state) => state;
.8880.calculatedLines;
