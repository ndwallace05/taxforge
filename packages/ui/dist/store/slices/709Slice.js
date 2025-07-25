import { createSlice } from '@reduxjs/toolkit';
interface;
709;
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
709;
Slice = createSlice({
    name: '709',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 709, Slice, actions;
export default 709;
Slice.reducer;
// Selectors
export const select709Values = (state) => state;
.709.values;
export const select709Errors = (state) => state;
.709.errors;
export const select709IsComplete = (state) => state;
.709.isComplete;
export const select709CalculatedLines = (state) => state;
.709.calculatedLines;
