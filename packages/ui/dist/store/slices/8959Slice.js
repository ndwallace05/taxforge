import { createSlice } from '@reduxjs/toolkit';
interface;
8959;
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
8959;
Slice = createSlice({
    name: '8959',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8959, Slice, actions;
export default 8959;
Slice.reducer;
// Selectors
export const select8959Values = (state) => state;
.8959.values;
export const select8959Errors = (state) => state;
.8959.errors;
export const select8959IsComplete = (state) => state;
.8959.isComplete;
export const select8959CalculatedLines = (state) => state;
.8959.calculatedLines;
