import { createSlice } from '@reduxjs/toolkit';
interface;
4562;
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
4562;
Slice = createSlice({
    name: '4562',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 4562, Slice, actions;
export default 4562;
Slice.reducer;
// Selectors
export const select4562Values = (state) => state;
.4562.values;
export const select4562Errors = (state) => state;
.4562.errors;
export const select4562IsComplete = (state) => state;
.4562.isComplete;
export const select4562CalculatedLines = (state) => state;
.4562.calculatedLines;
