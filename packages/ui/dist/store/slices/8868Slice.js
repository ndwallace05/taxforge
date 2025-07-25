import { createSlice } from '@reduxjs/toolkit';
interface;
8868;
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
8868;
Slice = createSlice({
    name: '8868',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8868, Slice, actions;
export default 8868;
Slice.reducer;
// Selectors
export const select8868Values = (state) => state;
.8868.values;
export const select8868Errors = (state) => state;
.8868.errors;
export const select8868IsComplete = (state) => state;
.8868.isComplete;
export const select8868CalculatedLines = (state) => state;
.8868.calculatedLines;
