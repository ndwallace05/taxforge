import { createSlice } from '@reduxjs/toolkit';
interface;
8965;
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
8965;
Slice = createSlice({
    name: '8965',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8965, Slice, actions;
export default 8965;
Slice.reducer;
// Selectors
export const select8965Values = (state) => state;
.8965.values;
export const select8965Errors = (state) => state;
.8965.errors;
export const select8965IsComplete = (state) => state;
.8965.isComplete;
export const select8965CalculatedLines = (state) => state;
.8965.calculatedLines;
