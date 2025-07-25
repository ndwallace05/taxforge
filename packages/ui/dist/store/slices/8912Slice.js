import { createSlice } from '@reduxjs/toolkit';
interface;
8912;
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
8912;
Slice = createSlice({
    name: '8912',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8912, Slice, actions;
export default 8912;
Slice.reducer;
// Selectors
export const select8912Values = (state) => state;
.8912.values;
export const select8912Errors = (state) => state;
.8912.errors;
export const select8912IsComplete = (state) => state;
.8912.isComplete;
export const select8912CalculatedLines = (state) => state;
.8912.calculatedLines;
