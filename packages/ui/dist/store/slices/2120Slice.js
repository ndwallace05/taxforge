import { createSlice } from '@reduxjs/toolkit';
interface;
2120;
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
2120;
Slice = createSlice({
    name: '2120',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2120, Slice, actions;
export default 2120;
Slice.reducer;
// Selectors
export const select2120Values = (state) => state;
.2120.values;
export const select2120Errors = (state) => state;
.2120.errors;
export const select2120IsComplete = (state) => state;
.2120.isComplete;
export const select2120CalculatedLines = (state) => state;
.2120.calculatedLines;
