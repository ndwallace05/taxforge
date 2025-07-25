import { createSlice } from '@reduxjs/toolkit';
interface;
8911;
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
8911;
Slice = createSlice({
    name: '8911',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8911, Slice, actions;
export default 8911;
Slice.reducer;
// Selectors
export const select8911Values = (state) => state;
.8911.values;
export const select8911Errors = (state) => state;
.8911.errors;
export const select8911IsComplete = (state) => state;
.8911.isComplete;
export const select8911CalculatedLines = (state) => state;
.8911.calculatedLines;
