import { createSlice } from '@reduxjs/toolkit';
interface;
8814;
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
8814;
Slice = createSlice({
    name: '8814',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8814, Slice, actions;
export default 8814;
Slice.reducer;
// Selectors
export const select8814Values = (state) => state;
.8814.values;
export const select8814Errors = (state) => state;
.8814.errors;
export const select8814IsComplete = (state) => state;
.8814.isComplete;
export const select8814CalculatedLines = (state) => state;
.8814.calculatedLines;
