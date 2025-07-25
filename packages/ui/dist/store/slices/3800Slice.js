import { createSlice } from '@reduxjs/toolkit';
interface;
3800;
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
3800;
Slice = createSlice({
    name: '3800',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 3800, Slice, actions;
export default 3800;
Slice.reducer;
// Selectors
export const select3800Values = (state) => state;
.3800.values;
export const select3800Errors = (state) => state;
.3800.errors;
export const select3800IsComplete = (state) => state;
.3800.isComplete;
export const select3800CalculatedLines = (state) => state;
.3800.calculatedLines;
