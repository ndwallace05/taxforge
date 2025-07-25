import { createSlice } from '@reduxjs/toolkit';
interface;
8936;
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
8936;
Slice = createSlice({
    name: '8936',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8936, Slice, actions;
export default 8936;
Slice.reducer;
// Selectors
export const select8936Values = (state) => state;
.8936.values;
export const select8936Errors = (state) => state;
.8936.errors;
export const select8936IsComplete = (state) => state;
.8936.isComplete;
export const select8936CalculatedLines = (state) => state;
.8936.calculatedLines;
