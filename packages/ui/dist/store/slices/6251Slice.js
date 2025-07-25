import { createSlice } from '@reduxjs/toolkit';
interface;
6251;
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
6251;
Slice = createSlice({
    name: '6251',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 6251, Slice, actions;
export default 6251;
Slice.reducer;
// Selectors
export const select6251Values = (state) => state;
.6251.values;
export const select6251Errors = (state) => state;
.6251.errors;
export const select6251IsComplete = (state) => state;
.6251.isComplete;
export const select6251CalculatedLines = (state) => state;
.6251.calculatedLines;
