import { createSlice } from '@reduxjs/toolkit';
interface;
8833;
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
8833;
Slice = createSlice({
    name: '8833',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8833, Slice, actions;
export default 8833;
Slice.reducer;
// Selectors
export const select8833Values = (state) => state;
.8833.values;
export const select8833Errors = (state) => state;
.8833.errors;
export const select8833IsComplete = (state) => state;
.8833.isComplete;
export const select8833CalculatedLines = (state) => state;
.8833.calculatedLines;
