import { createSlice } from '@reduxjs/toolkit';
interface;
5498;
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
5498;
Slice = createSlice({
    name: '5498',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5498, Slice, actions;
export default 5498;
Slice.reducer;
// Selectors
export const select5498Values = (state) => state;
.5498.values;
export const select5498Errors = (state) => state;
.5498.errors;
export const select5498IsComplete = (state) => state;
.5498.isComplete;
export const select5498CalculatedLines = (state) => state;
.5498.calculatedLines;
