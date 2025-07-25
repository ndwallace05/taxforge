import { createSlice } from '@reduxjs/toolkit';
interface;
8839;
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
8839;
Slice = createSlice({
    name: '8839',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8839, Slice, actions;
export default 8839;
Slice.reducer;
// Selectors
export const select8839Values = (state) => state;
.8839.values;
export const select8839Errors = (state) => state;
.8839.errors;
export const select8839IsComplete = (state) => state;
.8839.isComplete;
export const select8839CalculatedLines = (state) => state;
.8839.calculatedLines;
