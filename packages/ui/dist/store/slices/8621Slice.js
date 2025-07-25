import { createSlice } from '@reduxjs/toolkit';
interface;
8621;
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
8621;
Slice = createSlice({
    name: '8621',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8621, Slice, actions;
export default 8621;
Slice.reducer;
// Selectors
export const select8621Values = (state) => state;
.8621.values;
export const select8621Errors = (state) => state;
.8621.errors;
export const select8621IsComplete = (state) => state;
.8621.isComplete;
export const select8621CalculatedLines = (state) => state;
.8621.calculatedLines;
