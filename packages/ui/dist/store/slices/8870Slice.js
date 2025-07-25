import { createSlice } from '@reduxjs/toolkit';
interface;
8870;
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
8870;
Slice = createSlice({
    name: '8870',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8870, Slice, actions;
export default 8870;
Slice.reducer;
// Selectors
export const select8870Values = (state) => state;
.8870.values;
export const select8870Errors = (state) => state;
.8870.errors;
export const select8870IsComplete = (state) => state;
.8870.isComplete;
export const select8870CalculatedLines = (state) => state;
.8870.calculatedLines;
