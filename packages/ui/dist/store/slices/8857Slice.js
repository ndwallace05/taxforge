import { createSlice } from '@reduxjs/toolkit';
interface;
8857;
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
8857;
Slice = createSlice({
    name: '8857',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8857, Slice, actions;
export default 8857;
Slice.reducer;
// Selectors
export const select8857Values = (state) => state;
.8857.values;
export const select8857Errors = (state) => state;
.8857.errors;
export const select8857IsComplete = (state) => state;
.8857.isComplete;
export const select8857CalculatedLines = (state) => state;
.8857.calculatedLines;
