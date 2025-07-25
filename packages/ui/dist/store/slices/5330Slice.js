import { createSlice } from '@reduxjs/toolkit';
interface;
5330;
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
5330;
Slice = createSlice({
    name: '5330',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5330, Slice, actions;
export default 5330;
Slice.reducer;
// Selectors
export const select5330Values = (state) => state;
.5330.values;
export const select5330Errors = (state) => state;
.5330.errors;
export const select5330IsComplete = (state) => state;
.5330.isComplete;
export const select5330CalculatedLines = (state) => state;
.5330.calculatedLines;
