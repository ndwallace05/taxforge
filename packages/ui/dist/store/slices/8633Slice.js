import { createSlice } from '@reduxjs/toolkit';
interface;
8633;
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
8633;
Slice = createSlice({
    name: '8633',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8633, Slice, actions;
export default 8633;
Slice.reducer;
// Selectors
export const select8633Values = (state) => state;
.8633.values;
export const select8633Errors = (state) => state;
.8633.errors;
export const select8633IsComplete = (state) => state;
.8633.isComplete;
export const select8633CalculatedLines = (state) => state;
.8633.calculatedLines;
