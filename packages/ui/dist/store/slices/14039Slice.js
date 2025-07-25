import { createSlice } from '@reduxjs/toolkit';
interface;
14039;
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
14039;
Slice = createSlice({
    name: '14039',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 14039, Slice, actions;
export default 14039;
Slice.reducer;
// Selectors
export const select14039Values = (state) => state;
.14039.values;
export const select14039Errors = (state) => state;
.14039.errors;
export const select14039IsComplete = (state) => state;
.14039.isComplete;
export const select14039CalculatedLines = (state) => state;
.14039.calculatedLines;
