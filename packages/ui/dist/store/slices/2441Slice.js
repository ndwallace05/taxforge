import { createSlice } from '@reduxjs/toolkit';
interface;
2441;
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
2441;
Slice = createSlice({
    name: '2441',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2441, Slice, actions;
export default 2441;
Slice.reducer;
// Selectors
export const select2441Values = (state) => state;
.2441.values;
export const select2441Errors = (state) => state;
.2441.errors;
export const select2441IsComplete = (state) => state;
.2441.isComplete;
export const select2441CalculatedLines = (state) => state;
.2441.calculatedLines;
