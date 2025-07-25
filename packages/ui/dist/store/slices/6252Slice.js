import { createSlice } from '@reduxjs/toolkit';
interface;
6252;
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
6252;
Slice = createSlice({
    name: '6252',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 6252, Slice, actions;
export default 6252;
Slice.reducer;
// Selectors
export const select6252Values = (state) => state;
.6252.values;
export const select6252Errors = (state) => state;
.6252.errors;
export const select6252IsComplete = (state) => state;
.6252.isComplete;
export const select6252CalculatedLines = (state) => state;
.6252.calculatedLines;
