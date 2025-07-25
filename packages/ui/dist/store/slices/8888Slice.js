import { createSlice } from '@reduxjs/toolkit';
interface;
8888;
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
8888;
Slice = createSlice({
    name: '8888',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8888, Slice, actions;
export default 8888;
Slice.reducer;
// Selectors
export const select8888Values = (state) => state;
.8888.values;
export const select8888Errors = (state) => state;
.8888.errors;
export const select8888IsComplete = (state) => state;
.8888.isComplete;
export const select8888CalculatedLines = (state) => state;
.8888.calculatedLines;
