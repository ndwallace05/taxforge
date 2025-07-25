import { createSlice } from '@reduxjs/toolkit';
interface;
8960;
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
8960;
Slice = createSlice({
    name: '8960',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8960, Slice, actions;
export default 8960;
Slice.reducer;
// Selectors
export const select8960Values = (state) => state;
.8960.values;
export const select8960Errors = (state) => state;
.8960.errors;
export const select8960IsComplete = (state) => state;
.8960.isComplete;
export const select8960CalculatedLines = (state) => state;
.8960.calculatedLines;
