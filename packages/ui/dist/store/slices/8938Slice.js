import { createSlice } from '@reduxjs/toolkit';
interface;
8938;
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
8938;
Slice = createSlice({
    name: '8938',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8938, Slice, actions;
export default 8938;
Slice.reducer;
// Selectors
export const select8938Values = (state) => state;
.8938.values;
export const select8938Errors = (state) => state;
.8938.errors;
export const select8938IsComplete = (state) => state;
.8938.isComplete;
export const select8938CalculatedLines = (state) => state;
.8938.calculatedLines;
