import { createSlice } from '@reduxjs/toolkit';
interface;
945;
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
945;
Slice = createSlice({
    name: '945',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 945, Slice, actions;
export default 945;
Slice.reducer;
// Selectors
export const select945Values = (state) => state;
.945.values;
export const select945Errors = (state) => state;
.945.errors;
export const select945IsComplete = (state) => state;
.945.isComplete;
export const select945CalculatedLines = (state) => state;
.945.calculatedLines;
