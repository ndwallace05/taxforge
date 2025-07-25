import { createSlice } from '@reduxjs/toolkit';
interface;
9465;
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
9465;
Slice = createSlice({
    name: '9465',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 9465, Slice, actions;
export default 9465;
Slice.reducer;
// Selectors
export const select9465Values = (state) => state;
.9465.values;
export const select9465Errors = (state) => state;
.9465.errors;
export const select9465IsComplete = (state) => state;
.9465.isComplete;
export const select9465CalculatedLines = (state) => state;
.9465.calculatedLines;
