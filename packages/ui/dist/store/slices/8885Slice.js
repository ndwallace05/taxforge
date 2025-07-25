import { createSlice } from '@reduxjs/toolkit';
interface;
8885;
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
8885;
Slice = createSlice({
    name: '8885',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8885, Slice, actions;
export default 8885;
Slice.reducer;
// Selectors
export const select8885Values = (state) => state;
.8885.values;
export const select8885Errors = (state) => state;
.8885.errors;
export const select8885IsComplete = (state) => state;
.8885.isComplete;
export const select8885CalculatedLines = (state) => state;
.8885.calculatedLines;
