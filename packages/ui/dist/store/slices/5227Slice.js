import { createSlice } from '@reduxjs/toolkit';
interface;
5227;
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
5227;
Slice = createSlice({
    name: '5227',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5227, Slice, actions;
export default 5227;
Slice.reducer;
// Selectors
export const select5227Values = (state) => state;
.5227.values;
export const select5227Errors = (state) => state;
.5227.errors;
export const select5227IsComplete = (state) => state;
.5227.isComplete;
export const select5227CalculatedLines = (state) => state;
.5227.calculatedLines;
