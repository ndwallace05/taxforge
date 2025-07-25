import { createSlice } from '@reduxjs/toolkit';
interface;
14157;
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
14157;
Slice = createSlice({
    name: '14157',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 14157, Slice, actions;
export default 14157;
Slice.reducer;
// Selectors
export const select14157Values = (state) => state;
.14157.values;
export const select14157Errors = (state) => state;
.14157.errors;
export const select14157IsComplete = (state) => state;
.14157.isComplete;
export const select14157CalculatedLines = (state) => state;
.14157.calculatedLines;
