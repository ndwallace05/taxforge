import { createSlice } from '@reduxjs/toolkit';
interface;
8853;
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
8853;
Slice = createSlice({
    name: '8853',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8853, Slice, actions;
export default 8853;
Slice.reducer;
// Selectors
export const select8853Values = (state) => state;
.8853.values;
export const select8853Errors = (state) => state;
.8853.errors;
export const select8853IsComplete = (state) => state;
.8853.isComplete;
export const select8853CalculatedLines = (state) => state;
.8853.calculatedLines;
