import { createSlice } from '@reduxjs/toolkit';
interface;
5405;
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
5405;
Slice = createSlice({
    name: '5405',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5405, Slice, actions;
export default 5405;
Slice.reducer;
// Selectors
export const select5405Values = (state) => state;
.5405.values;
export const select5405Errors = (state) => state;
.5405.errors;
export const select5405IsComplete = (state) => state;
.5405.isComplete;
export const select5405CalculatedLines = (state) => state;
.5405.calculatedLines;
