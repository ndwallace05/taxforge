import { createSlice } from '@reduxjs/toolkit';
interface;
5471;
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
5471;
Slice = createSlice({
    name: '5471',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5471, Slice, actions;
export default 5471;
Slice.reducer;
// Selectors
export const select5471Values = (state) => state;
.5471.values;
export const select5471Errors = (state) => state;
.5471.errors;
export const select5471IsComplete = (state) => state;
.5471.isComplete;
export const select5471CalculatedLines = (state) => state;
.5471.calculatedLines;
