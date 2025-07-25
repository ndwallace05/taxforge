import { createSlice } from '@reduxjs/toolkit';
interface;
8949;
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
8949;
Slice = createSlice({
    name: '8949',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8949, Slice, actions;
export default 8949;
Slice.reducer;
// Selectors
export const select8949Values = (state) => state;
.8949.values;
export const select8949Errors = (state) => state;
.8949.errors;
export const select8949IsComplete = (state) => state;
.8949.isComplete;
export const select8949CalculatedLines = (state) => state;
.8949.calculatedLines;
