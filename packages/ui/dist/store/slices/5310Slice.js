import { createSlice } from '@reduxjs/toolkit';
interface;
5310;
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
5310;
Slice = createSlice({
    name: '5310',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 5310, Slice, actions;
export default 5310;
Slice.reducer;
// Selectors
export const select5310Values = (state) => state;
.5310.values;
export const select5310Errors = (state) => state;
.5310.errors;
export const select5310IsComplete = (state) => state;
.5310.isComplete;
export const select5310CalculatedLines = (state) => state;
.5310.calculatedLines;
