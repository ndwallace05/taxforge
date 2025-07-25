import { createSlice } from '@reduxjs/toolkit';
interface;
6069;
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
6069;
Slice = createSlice({
    name: '6069',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 6069, Slice, actions;
export default 6069;
Slice.reducer;
// Selectors
export const select6069Values = (state) => state;
.6069.values;
export const select6069Errors = (state) => state;
.6069.errors;
export const select6069IsComplete = (state) => state;
.6069.isComplete;
export const select6069CalculatedLines = (state) => state;
.6069.calculatedLines;
