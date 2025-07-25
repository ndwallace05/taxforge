import { createSlice } from '@reduxjs/toolkit';
interface;
15109;
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
15109;
Slice = createSlice({
    name: '15109',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 15109, Slice, actions;
export default 15109;
Slice.reducer;
// Selectors
export const select15109Values = (state) => state;
.15109.values;
export const select15109Errors = (state) => state;
.15109.errors;
export const select15109IsComplete = (state) => state;
.15109.isComplete;
export const select15109CalculatedLines = (state) => state;
.15109.calculatedLines;
