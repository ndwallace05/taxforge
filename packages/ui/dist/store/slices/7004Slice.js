import { createSlice } from '@reduxjs/toolkit';
interface;
7004;
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
7004;
Slice = createSlice({
    name: '7004',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 7004, Slice, actions;
export default 7004;
Slice.reducer;
// Selectors
export const select7004Values = (state) => state;
.7004.values;
export const select7004Errors = (state) => state;
.7004.errors;
export const select7004IsComplete = (state) => state;
.7004.isComplete;
export const select7004CalculatedLines = (state) => state;
.7004.calculatedLines;
