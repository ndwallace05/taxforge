import { createSlice } from '@reduxjs/toolkit';
interface;
2553;
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
2553;
Slice = createSlice({
    name: '2553',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2553, Slice, actions;
export default 2553;
Slice.reducer;
// Selectors
export const select2553Values = (state) => state;
.2553.values;
export const select2553Errors = (state) => state;
.2553.errors;
export const select2553IsComplete = (state) => state;
.2553.isComplete;
export const select2553CalculatedLines = (state) => state;
.2553.calculatedLines;
