import { createSlice } from '@reduxjs/toolkit';
interface;
1098;
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
1098;
Slice = createSlice({
    name: '1098',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1098, Slice, actions;
export default 1098;
Slice.reducer;
// Selectors
export const select1098Values = (state) => state;
.1098.values;
export const select1098Errors = (state) => state;
.1098.errors;
export const select1098IsComplete = (state) => state;
.1098.isComplete;
export const select1098CalculatedLines = (state) => state;
.1098.calculatedLines;
