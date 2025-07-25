import { createSlice } from '@reduxjs/toolkit';
interface;
5884;
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
5884;
Slice = createSlice({
    name: '5884',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5884, Slice, actions;
export default 5884;
Slice.reducer;
// Selectors
export const select5884Values = (state) => state;
.5884.values;
export const select5884Errors = (state) => state;
.5884.errors;
export const select5884IsComplete = (state) => state;
.5884.isComplete;
export const select5884CalculatedLines = (state) => state;
.5884.calculatedLines;
