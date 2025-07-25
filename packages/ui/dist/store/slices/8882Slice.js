import { createSlice } from '@reduxjs/toolkit';
interface;
8882;
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
8882;
Slice = createSlice({
    name: '8882',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8882, Slice, actions;
export default 8882;
Slice.reducer;
// Selectors
export const select8882Values = (state) => state;
.8882.values;
export const select8882Errors = (state) => state;
.8882.errors;
export const select8882IsComplete = (state) => state;
.8882.isComplete;
export const select8882CalculatedLines = (state) => state;
.8882.calculatedLines;
