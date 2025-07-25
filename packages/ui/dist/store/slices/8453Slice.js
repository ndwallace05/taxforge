import { createSlice } from '@reduxjs/toolkit';
interface;
8453;
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
8453;
Slice = createSlice({
    name: '8453',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8453, Slice, actions;
export default 8453;
Slice.reducer;
// Selectors
export const select8453Values = (state) => state;
.8453.values;
export const select8453Errors = (state) => state;
.8453.errors;
export const select8453IsComplete = (state) => state;
.8453.isComplete;
export const select8453CalculatedLines = (state) => state;
.8453.calculatedLines;
