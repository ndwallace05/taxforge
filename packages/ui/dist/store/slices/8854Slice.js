import { createSlice } from '@reduxjs/toolkit';
interface;
8854;
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
8854;
Slice = createSlice({
    name: '8854',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8854, Slice, actions;
export default 8854;
Slice.reducer;
// Selectors
export const select8854Values = (state) => state;
.8854.values;
export const select8854Errors = (state) => state;
.8854.errors;
export const select8854IsComplete = (state) => state;
.8854.isComplete;
export const select8854CalculatedLines = (state) => state;
.8854.calculatedLines;
