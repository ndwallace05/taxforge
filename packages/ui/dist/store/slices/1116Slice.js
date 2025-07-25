import { createSlice } from '@reduxjs/toolkit';
interface;
1116;
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
1116;
Slice = createSlice({
    name: '1116',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 1116, Slice, actions;
export default 1116;
Slice.reducer;
// Selectors
export const select1116Values = (state) => state;
.1116.values;
export const select1116Errors = (state) => state;
.1116.errors;
export const select1116IsComplete = (state) => state;
.1116.isComplete;
export const select1116CalculatedLines = (state) => state;
.1116.calculatedLines;
