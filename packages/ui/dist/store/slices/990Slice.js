import { createSlice } from '@reduxjs/toolkit';
interface;
990;
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
990;
Slice = createSlice({
    name: '990',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 990, Slice, actions;
export default 990;
Slice.reducer;
// Selectors
export const select990Values = (state) => state;
.990.values;
export const select990Errors = (state) => state;
.990.errors;
export const select990IsComplete = (state) => state;
.990.isComplete;
export const select990CalculatedLines = (state) => state;
.990.calculatedLines;
