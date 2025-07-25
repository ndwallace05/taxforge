import { createSlice } from '@reduxjs/toolkit';
interface;
8910;
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
8910;
Slice = createSlice({
    name: '8910',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8910, Slice, actions;
export default 8910;
Slice.reducer;
// Selectors
export const select8910Values = (state) => state;
.8910.values;
export const select8910Errors = (state) => state;
.8910.errors;
export const select8910IsComplete = (state) => state;
.8910.isComplete;
export const select8910CalculatedLines = (state) => state;
.8910.calculatedLines;
