import { createSlice } from '@reduxjs/toolkit';
interface;
2106;
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
2106;
Slice = createSlice({
    name: '2106',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2106, Slice, actions;
export default 2106;
Slice.reducer;
// Selectors
export const select2106Values = (state) => state;
.2106.values;
export const select2106Errors = (state) => state;
.2106.errors;
export const select2106IsComplete = (state) => state;
.2106.isComplete;
export const select2106CalculatedLines = (state) => state;
.2106.calculatedLines;
