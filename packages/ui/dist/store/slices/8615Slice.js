import { createSlice } from '@reduxjs/toolkit';
interface;
8615;
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
8615;
Slice = createSlice({
    name: '8615',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8615, Slice, actions;
export default 8615;
Slice.reducer;
// Selectors
export const select8615Values = (state) => state;
.8615.values;
export const select8615Errors = (state) => state;
.8615.errors;
export const select8615IsComplete = (state) => state;
.8615.isComplete;
export const select8615CalculatedLines = (state) => state;
.8615.calculatedLines;
