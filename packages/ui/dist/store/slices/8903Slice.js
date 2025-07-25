import { createSlice } from '@reduxjs/toolkit';
interface;
8903;
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
8903;
Slice = createSlice({
    name: '8903',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8903, Slice, actions;
export default 8903;
Slice.reducer;
// Selectors
export const select8903Values = (state) => state;
.8903.values;
export const select8903Errors = (state) => state;
.8903.errors;
export const select8903IsComplete = (state) => state;
.8903.isComplete;
export const select8903CalculatedLines = (state) => state;
.8903.calculatedLines;
