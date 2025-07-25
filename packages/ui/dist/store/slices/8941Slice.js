import { createSlice } from '@reduxjs/toolkit';
interface;
8941;
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
8941;
Slice = createSlice({
    name: '8941',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8941, Slice, actions;
export default 8941;
Slice.reducer;
// Selectors
export const select8941Values = (state) => state;
.8941.values;
export const select8941Errors = (state) => state;
.8941.errors;
export const select8941IsComplete = (state) => state;
.8941.isComplete;
export const select8941CalculatedLines = (state) => state;
.8941.calculatedLines;
