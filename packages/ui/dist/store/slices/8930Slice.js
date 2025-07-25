import { createSlice } from '@reduxjs/toolkit';
interface;
8930;
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
8930;
Slice = createSlice({
    name: '8930',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8930, Slice, actions;
export default 8930;
Slice.reducer;
// Selectors
export const select8930Values = (state) => state;
.8930.values;
export const select8930Errors = (state) => state;
.8930.errors;
export const select8930IsComplete = (state) => state;
.8930.isComplete;
export const select8930CalculatedLines = (state) => state;
.8930.calculatedLines;
