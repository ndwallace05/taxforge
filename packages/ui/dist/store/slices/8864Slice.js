import { createSlice } from '@reduxjs/toolkit';
interface;
8864;
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
8864;
Slice = createSlice({
    name: '8864',
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
export const { setValue, setError, setCalculatedValue, setComplete, reset } = 8864, Slice, actions;
export default 8864;
Slice.reducer;
// Selectors
export const select8864Values = (state) => state;
.8864.values;
export const select8864Errors = (state) => state;
.8864.errors;
export const select8864IsComplete = (state) => state;
.8864.isComplete;
export const select8864CalculatedLines = (state) => state;
.8864.calculatedLines;
