import { createSlice } from '@reduxjs/toolkit';
interface;
2350;
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
2350;
Slice = createSlice({
    name: '2350',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2350, Slice, actions;
export default 2350;
Slice.reducer;
// Selectors
export const select2350Values = (state) => state;
.2350.values;
export const select2350Errors = (state) => state;
.2350.errors;
export const select2350IsComplete = (state) => state;
.2350.isComplete;
export const select2350CalculatedLines = (state) => state;
.2350.calculatedLines;
