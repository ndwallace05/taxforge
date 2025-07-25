import { createSlice } from '@reduxjs/toolkit';
interface;
8919;
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
8919;
Slice = createSlice({
    name: '8919',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8919, Slice, actions;
export default 8919;
Slice.reducer;
// Selectors
export const select8919Values = (state) => state;
.8919.values;
export const select8919Errors = (state) => state;
.8919.errors;
export const select8919IsComplete = (state) => state;
.8919.isComplete;
export const select8919CalculatedLines = (state) => state;
.8919.calculatedLines;
