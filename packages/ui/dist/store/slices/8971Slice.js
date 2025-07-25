import { createSlice } from '@reduxjs/toolkit';
interface;
8971;
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
8971;
Slice = createSlice({
    name: '8971',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8971, Slice, actions;
export default 8971;
Slice.reducer;
// Selectors
export const select8971Values = (state) => state;
.8971.values;
export const select8971Errors = (state) => state;
.8971.errors;
export const select8971IsComplete = (state) => state;
.8971.isComplete;
export const select8971CalculatedLines = (state) => state;
.8971.calculatedLines;
