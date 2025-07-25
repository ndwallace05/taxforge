import { createSlice } from '@reduxjs/toolkit';
interface;
706;
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
706;
Slice = createSlice({
    name: '706',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 706, Slice, actions;
export default 706;
Slice.reducer;
// Selectors
export const select706Values = (state) => state;
.706.values;
export const select706Errors = (state) => state;
.706.errors;
export const select706IsComplete = (state) => state;
.706.isComplete;
export const select706CalculatedLines = (state) => state;
.706.calculatedLines;
