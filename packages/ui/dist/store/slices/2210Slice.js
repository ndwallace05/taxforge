import { createSlice } from '@reduxjs/toolkit';
interface;
2210;
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
2210;
Slice = createSlice({
    name: '2210',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 2210, Slice, actions;
export default 2210;
Slice.reducer;
// Selectors
export const select2210Values = (state) => state;
.2210.values;
export const select2210Errors = (state) => state;
.2210.errors;
export const select2210IsComplete = (state) => state;
.2210.isComplete;
export const select2210CalculatedLines = (state) => state;
.2210.calculatedLines;
