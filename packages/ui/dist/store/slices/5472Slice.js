import { createSlice } from '@reduxjs/toolkit';
interface;
5472;
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
5472;
Slice = createSlice({
    name: '5472',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5472, Slice, actions;
export default 5472;
Slice.reducer;
// Selectors
export const select5472Values = (state) => state;
.5472.values;
export const select5472Errors = (state) => state;
.5472.errors;
export const select5472IsComplete = (state) => state;
.5472.isComplete;
export const select5472CalculatedLines = (state) => state;
.5472.calculatedLines;
