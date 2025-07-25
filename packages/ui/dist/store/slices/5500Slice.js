import { createSlice } from '@reduxjs/toolkit';
interface;
5500;
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
5500;
Slice = createSlice({
    name: '5500',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5500, Slice, actions;
export default 5500;
Slice.reducer;
// Selectors
export const select5500Values = (state) => state;
.5500.values;
export const select5500Errors = (state) => state;
.5500.errors;
export const select5500IsComplete = (state) => state;
.5500.isComplete;
export const select5500CalculatedLines = (state) => state;
.5500.calculatedLines;
