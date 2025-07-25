import { createSlice } from '@reduxjs/toolkit';
interface;
8582;
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
8582;
Slice = createSlice({
    name: '8582',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8582, Slice, actions;
export default 8582;
Slice.reducer;
// Selectors
export const select8582Values = (state) => state;
.8582.values;
export const select8582Errors = (state) => state;
.8582.errors;
export const select8582IsComplete = (state) => state;
.8582.isComplete;
export const select8582CalculatedLines = (state) => state;
.8582.calculatedLines;
