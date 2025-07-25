import { createSlice } from '@reduxjs/toolkit';
interface;
8027;
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
8027;
Slice = createSlice({
    name: '8027',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8027, Slice, actions;
export default 8027;
Slice.reducer;
// Selectors
export const select8027Values = (state) => state;
.8027.values;
export const select8027Errors = (state) => state;
.8027.errors;
export const select8027IsComplete = (state) => state;
.8027.isComplete;
export const select8027CalculatedLines = (state) => state;
.8027.calculatedLines;
