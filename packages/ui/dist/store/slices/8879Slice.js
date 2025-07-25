import { createSlice } from '@reduxjs/toolkit';
interface;
8879;
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
8879;
Slice = createSlice({
    name: '8879',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8879, Slice, actions;
export default 8879;
Slice.reducer;
// Selectors
export const select8879Values = (state) => state;
.8879.values;
export const select8879Errors = (state) => state;
.8879.errors;
export const select8879IsComplete = (state) => state;
.8879.isComplete;
export const select8879CalculatedLines = (state) => state;
.8879.calculatedLines;
