import { createSlice } from '@reduxjs/toolkit';
interface;
8908;
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
8908;
Slice = createSlice({
    name: '8908',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8908, Slice, actions;
export default 8908;
Slice.reducer;
// Selectors
export const select8908Values = (state) => state;
.8908.values;
export const select8908Errors = (state) => state;
.8908.errors;
export const select8908IsComplete = (state) => state;
.8908.isComplete;
export const select8908CalculatedLines = (state) => state;
.8908.calculatedLines;
