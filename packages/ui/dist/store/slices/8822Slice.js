import { createSlice } from '@reduxjs/toolkit';
interface;
8822;
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
8822;
Slice = createSlice({
    name: '8822',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8822, Slice, actions;
export default 8822;
Slice.reducer;
// Selectors
export const select8822Values = (state) => state;
.8822.values;
export const select8822Errors = (state) => state;
.8822.errors;
export const select8822IsComplete = (state) => state;
.8822.isComplete;
export const select8822CalculatedLines = (state) => state;
.8822.calculatedLines;
